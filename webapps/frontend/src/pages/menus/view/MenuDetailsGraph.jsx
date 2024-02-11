import { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { calculateMenuNutrients } from "../../../utils/calculateMenuNutrients";

const MenuDetailsGraph = ({ entrante, primerPlato, segundoPlato, postre }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const menuSumado = calculateMenuNutrients(entrante, primerPlato, segundoPlato, postre);

    console.log(menuSumado);
    setData(menuSumado);
  }, [entrante, primerPlato, segundoPlato, postre]);

  return <></>;
};

export default MenuDetailsGraph;
