export type Formatter = "currency";

export const formatValue = (value: string, formatters?: Formatter[]) => {
  let result = value;
  if (Array.isArray(formatters)) {
    for (const f of formatters) {
      switch (f) {
        case "currency":
          if (!Number.isNaN(parseFloat(result))) {
            result = `$${parseFloat(result).toFixed(2)}`;
          }
          break;
        default:
        // Do nothing
      }
    }
  }
  return result;
};
