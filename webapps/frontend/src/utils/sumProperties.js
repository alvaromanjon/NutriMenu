function getNestedValue(obj, path) {
  return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function sumProperties(object, property) {
  return object.alimentos.reduce((sum, item) => {
    const value = getNestedValue(item, ["componentesNutricionales", property]);
    return sum + (typeof value === "number" ? value : 0);
  }, 0);
}

export function sumDeepProperties(object, property, deepProperty) {
  return object.alimentos.reduce((sum, item) => {
    const value = getNestedValue(item, ["componentesNutricionales", property, deepProperty]);
    return sum + (typeof value === "number" ? value : 0);
  }, 0);
}

export function sumObjectsByProperty(objects) {
  if (!objects || objects.length === 0) return {};

  // Initialize an object to store the sum of each property
  const sumResult = {};

  // Iterate over each object
  objects.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      // Ensure the property value is a number before adding it
      if (typeof obj[key] === "number") {
        if (sumResult[key] === undefined) {
          sumResult[key] = obj[key]; // Initialize if not already present
        } else {
          sumResult[key] += obj[key]; // Accumulate the sum
        }
      }
      // Skip or handle non-numeric properties differently as needed
    });
  });

  return sumResult;
}
