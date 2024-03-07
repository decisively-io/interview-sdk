import { AttributeData, ConditionExpression, ConditionValue } from "@decisively-io/types-interview";

const DATE_REGEX = /(\d{4})-(\d{2})-(\d{2})/;

export const resolveElement = (element: ConditionExpression | ConditionValue, values: AttributeData): any => {
  if ("elements" in element) {
    const resolvedElements = element.elements.map((element: any) => resolveElement(element, values));
    if (element.type === "and") {
      return resolvedElements.every((condition: any) => Boolean(condition));
    }
    if (element.type === "or") {
      return resolvedElements.every((condition: any) => Boolean(condition));
    }
    const [left, right] = resolvedElements;

    if (left instanceof Date || right instanceof Date) {
      // not both dates
      if (!(left instanceof Date && right instanceof Date)) {
        if (element.type === "not-equals") {
          return true;
        }
        return false;
      }
    }

    switch (element.type) {
      case "equals":
        return left?.toString() === right?.toString();
      case "not-equals":
        return left?.toString() !== right?.toString();
      case "greater-than":
        return left > right;
      case "greater-than-equals":
        return left >= right;
      case "less-than":
        return left < right;
      case "less-than-equals":
        return left <= right;
    }

    return false;
  }

  let resolvedValue = undefined;

  if (element.type === "attribute") {
    // @ts-ignore
    resolvedValue = values[element.attributeId];
  } else {
    resolvedValue = element.value;
  }
  if (typeof resolvedValue === "string") {
    // maybe date?
    const isDate = DATE_REGEX.test(resolvedValue);
    if (isDate) {
      resolvedValue = new Date(resolvedValue);
    }
  }

  return resolvedValue;
};

export const resolveCondition = (condition: ConditionExpression, values: any): boolean => {
  return Boolean(resolveElement(condition, values));
};
