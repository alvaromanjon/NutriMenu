import { calculatePlatoNutrients } from "./calculatePlatoNutrients";
import { sumObjectsByProperty } from "./sumProperties";

export function calculateMenuNutrients(entrante, primerPlato, segundoPlato, postre) {
  const entranteData = calculatePlatoNutrients(entrante);
  const primerPlatoData = calculatePlatoNutrients(primerPlato);
  const segundoPlatoData = calculatePlatoNutrients(segundoPlato);
  const postreData = calculatePlatoNutrients(postre);
  const menuSumado = sumObjectsByProperty([entranteData, primerPlatoData, segundoPlatoData, postreData]);

  return menuSumado;
}
