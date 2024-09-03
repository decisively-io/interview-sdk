import { format, parseISO } from "date-fns";
import { v4 as baseUuid } from "uuid";
import type {
  AttributeValues,
  Control,
  ControlsValue,
  EntityControl,
  EntityControlInstance,
  FileControl,
  ImageControl,
  RenderableControl,
  RenderableEntityControl,
  State,
  TypographyControl,
} from "../types";

export const uuid = baseUuid;

export const buildUrl = (...args: (string | undefined)[]) => {
  return [...args.filter((a) => !!a)].join("/");
};

export const range = (size: number, startAt = 0) => {
  return [...Array(size).keys()].map((i) => i + startAt);
};

export const stateToData = (state: State[]): AttributeValues => {
  return Object.keys(state).reduce((acc: AttributeValues, key) => {
    acc[key] = state.find((s) => s.id === key)?.value;
    return acc;
  }, {});
};

export const isStrNotNullOrBlank = (str: any): boolean => !/^\s*$/.test(str || "");
export const isStrNullOrBlank = (str: any): boolean => !isStrNotNullOrBlank(str);

export const getEntityIds = (entity: string, values: AttributeValues): string[] => {
  const regex = new RegExp(`${entity}\\.(.*)\\.@id`);
  return Object.entries(values).reduce((ids, [key, value]) => {
    if (typeof value === "string" && regex.test(key)) {
      ids.push(value);
    }
    return ids;
  }, [] as string[]);
};

export const iterateControls = (controls: Control[], func: (control: Control) => void, template?: boolean) => {
  for (const control of controls) {
    func(control);
    if (control.type === "repeating_container") {
      const ctrl = control;

      if (ctrl.controls) {
        iterateControls(ctrl.controls, func);
      }
    } else if (control.type === "switch_container") {
      const ctrl = control;
      if (ctrl.outcome_false) {
        iterateControls(ctrl.outcome_false, func);
      }
      if (ctrl.outcome_true) {
        iterateControls(ctrl.outcome_true, func);
      }
    } else if (control.type === "certainty_container") {
      const ctrl = control;
      if (ctrl.certain) {
        iterateControls(ctrl.certain, func);
      }
      if (ctrl.uncertain) {
        iterateControls(ctrl.uncertain, func);
      }
    } else if (control.type === "entity") {
      const ctrl = control as RenderableEntityControl;
      // @ts-ignore
      if (ctrl.instances && !template) {
        // @ts-ignore
        for (const instance of ctrl.instances) {
          iterateControls(instance.controls, func);
        }
      } else if (ctrl.template) {
        iterateControls(ctrl.template, func);
      }
    } else if (control.type === "data_container") {
      const ctrl = control;
      if (ctrl.controls) {
        iterateControls(ctrl.controls, func);
      }
    }
  }
};

export const applyInstancesToEntityControl = (control: RenderableEntityControl, instances: string[]) => {
  if (typeof control.min === "number") {
    while (instances.length < control.min) {
      instances.push(uuid());
    }
  }
  // @ts-ignore
  control.instances = instances.map((id: string) => {
    const controls = structuredClone(control.template);
    iterateControls(controls, (control: any) => {
      if (typeof control.templateText === "string") {
        control.templateText = control.templateText.replace(/@id/g, id);
      }
      if (typeof control.attribute === "string") {
        control.attribute = control.attribute.replace(/@id/g, id);
      }
      if (Array.isArray(control.dynamicAttributes)) {
        control.dynamicAttributes = control.dynamicAttributes.map((attr: string) => attr.replace(/@id/g, id));
      }
    });

    return {
      id: id,
      controls: controls,
    } satisfies EntityControlInstance;
  });
};
export const deriveDefaultControlsValue = (controls: RenderableControl[], nested?: boolean): ControlsValue => {
  return controls.reduce((result, control) => {
    switch (control.type) {
      case "boolean":
      case "currency":
      case "date":
      case "time":
      case "datetime":
      case "options":
      case "text": {
        const attribute: string = nested ? (control.attribute.split("/").pop() as string) : control.attribute;

        result[attribute] = getDefaultControlValue(control);
        break;
      }
      case "number_of_instances":
        result[control.entity] = getDefaultControlValue(control);
        break;

      case "entity": {
        const { min, instances, template, entityId } = control;

        const entities = [];
        const entityCount = Math.max(min || 0, instances?.length || 0);
        for (let i = 0; i < entityCount; i++) {
          const instance = instances?.[i];
          const resolveEntityId = instance?.id || entityId || uuid();
          entities.push({
            "@id": resolveEntityId,
            ...deriveDefaultControlsValue(instance?.controls ?? template, true),
          });
        }

        result[control.entity] = entities;
        break;
      }

      case "switch_container": {
        const controls = control.branch === "true" ? control.outcome_true : control.outcome_false;
        if (controls) {
          Object.assign(result, deriveDefaultControlsValue(controls));
        }
        break;
      }

      case "repeating_container": {
        Object.assign(result, deriveDefaultControlsValue(control.controls));

        break;
      }

      default:
        break;
    }
    return result;
  }, {} as ControlsValue);
};

const getDefaultControlValue = (
  c: Exclude<Control, EntityControl | TypographyControl | ImageControl | FileControl>,
): ControlsValue[keyof ControlsValue] => {
  switch (c.type) {
    case "boolean":
      return c.value === undefined ? c.default : c.value;

    case "currency":
      return c.value === undefined ? c.default : c.value;

    case "date": {
      const valueRaw = c.value === undefined ? c.default : c.value;

      return valueRaw === "now" ? formatDate(new Date(), "yyyy-MM-dd") : valueRaw;
    }

    case "time": {
      const valueRaw = c.value === undefined ? c.default : c.value;

      return valueRaw === "now" ? formatDate(new Date(), "HH:mm:ss") : valueRaw;
    }

    case "datetime":
      return c.value === undefined ? c.default : c.value;

    case "options":
      return c.value === undefined ? c.default : c.value;

    case "number_of_instances":
      return (() => {
        if (c.value !== undefined && c.value !== null) return c.value.length;
        if (c.default !== undefined) return c.default.length;

        return c.min ?? 0;
      })();

    case "text": {
      const v = c.value === undefined ? c.default : c.value;

      // additional stringification is here, because we might get
      // number from server
      return v == null || v === undefined ? v : String(v);
    }

    default:
  }
};

export const formatDate = (
  argument: string | Date | number,
  dateFormat: string,
  options?: Parameters<typeof format>[2],
) => {
  return format(typeof argument === "string" ? parseISO(argument) : argument, dateFormat, options);
};

// turn deep object into flat . delimted object
export const flatten = (value: any) => {
  const result: Record<string, any> = {};

  const recurse = (obj: any, path: string[] = []) => {
    if (typeof obj !== "object" || obj === null) {
      result[path.join(".")] = obj;
      return;
    }

    for (const [key, value] of Object.entries(obj)) {
      recurse(value, [...path, key]);
    }
  };

  recurse(value);

  return result;
};
