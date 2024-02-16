export function flattenObject(obj) {
  const flattened = {};

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.keys(obj[key]).forEach((nestedKey) => {
        flattened[nestedKey] = obj[key][nestedKey];
      });
    } else {
      flattened[key] = obj[key];
    }
  });

  return flattened;
}
