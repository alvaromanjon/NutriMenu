import { sumDeepProperties, sumProperties } from "./sumProperties";

export function calculatePlatoNutrients(plato) {
  const result = {};

  result.calorias = sumProperties(plato, "calorias");
  result.grasas = sumProperties(plato, "grasas");
  result.grasasSaturadas = sumProperties(plato, "grasasSaturadas");
  result.hidratosCarbono = sumProperties(plato, "hidratosCarbono");
  result.azucares = sumProperties(plato, "azucares");
  result.fibra = sumProperties(plato, "fibra");
  result.proteinas = sumProperties(plato, "proteinas");
  result.sal = sumProperties(plato, "sal");
  result.vitaminaA = sumDeepProperties(plato, "vitaminas", "vitaminaA");
  result.vitaminaD = sumDeepProperties(plato, "vitaminas", "vitaminaD");
  result.vitaminaE = sumDeepProperties(plato, "vitaminas", "vitaminaE");
  result.vitaminaB9 = sumDeepProperties(plato, "vitaminas", "vitaminaB9");
  result.vitaminaB3 = sumDeepProperties(plato, "vitaminas", "vitaminaB3");
  result.vitaminaB2 = sumDeepProperties(plato, "vitaminas", "vitaminaB2");
  result.vitaminaB1 = sumDeepProperties(plato, "vitaminas", "vitaminaB1");
  result.vitaminaB12 = sumDeepProperties(plato, "vitaminas", "vitaminaB12");
  result.vitaminaB6 = sumDeepProperties(plato, "vitaminas", "vitaminaB6");
  result.vitaminaC = sumDeepProperties(plato, "vitaminas", "vitaminaC");
  result.calcio = sumDeepProperties(plato, "minerales", "calcio");
  result.hierro = sumDeepProperties(plato, "minerales", "hierro");
  result.potasio = sumDeepProperties(plato, "minerales", "potasio");
  result.magnesio = sumDeepProperties(plato, "minerales", "magnesio");
  result.sodio = sumDeepProperties(plato, "minerales", "sodio");
  result.fosforo = sumDeepProperties(plato, "minerales", "fosforo");
  result.selenio = sumDeepProperties(plato, "minerales", "selenio");
  result.zinc = sumDeepProperties(plato, "minerales", "zinc");

  return result;
}