import { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { calculateMenuNutrients } from "../../../utils/calculateMenuNutrients";

const MenuDetailsGraph = ({ entrante, primerPlato, segundoPlato, postre }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const menuSumado = calculateMenuNutrients(entrante, primerPlato, segundoPlato, postre);
    const newData = [
      { tipo: "Grasas", valor: menuSumado.grasas },
      { tipo: "Grasas saturadas", valor: menuSumado.grasasSaturadas },
      { tipo: "Hidratos de carbono", valor: menuSumado.hidratosCarbono },
      { tipo: "Azúcares", valor: menuSumado.azucares },
      { tipo: "Fibra", valor: menuSumado.fibra },
      { tipo: "Proteínas", valor: menuSumado.proteinas },
      { tipo: "Sal", valor: menuSumado.sal },
    ];
    setChartData(newData);
    //console.log(data);
  }, [entrante, primerPlato, segundoPlato, postre]);

  const options = {
    autoSize: true,
    data: chartData,
    series: [{ type: "pie", angleKey: "valor", legendItemKey: "tipo" }],
  };

  return (
    <>
      <AgChartsReact options={options} />
    </>
  );
};

export default MenuDetailsGraph;
