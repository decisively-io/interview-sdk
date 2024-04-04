import { format } from "date-fns";

export type Formatter = "currency";

export const formatValue = (value: string, formatters?: Formatter[]) => {
  let result = value;
  if (Array.isArray(formatters)) {
    for (const f of formatters) {
      const args = f.split(" ");
      switch (args[0]) {
        case "currency":
          if (!Number.isNaN(Number.parseFloat(result))) {
            result = `$${Number.parseFloat(result).toFixed(2)}`;
          }
          break;
        case "date":
          if (args[1]) {
            try {
              const fmt = args.slice(1);
              result = format(value, fmt.join(" "));
            } catch (error) {
              // Ignore all errors- we will just use the current string
            }
          }
          break;
        default:
        // Do nothing
      }
    }
  }
  return result;
};
