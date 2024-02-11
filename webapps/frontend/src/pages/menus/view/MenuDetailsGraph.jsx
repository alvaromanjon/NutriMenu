import { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { calculateMenuNutrients } from "../../../utils/calculateMenuNutrients";
import MenuDetailsTable from "./MenuDetailsTable";
import { Card, Nav } from "react-bootstrap";

const MenuDetailsGraph = ({ entrante, primerPlato, segundoPlato, postre }) => {
  const [chartData, setChartData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([
    { field: "tipo", sortable: true, filter: true },
    { field: "grupo", sortable: true, filter: true },
    { field: "valor", sortable: true, filter: true },
    { field: "ingestaReferencia", sortable: false, filter: false },
    { field: "unidad", sortable: false, filter: true },
  ]);

  const [grafico, setGrafico] = useState(true);
  const [tabla, setTabla] = useState(false);

  useEffect(() => {
    const menuSumado = calculateMenuNutrients(entrante, primerPlato, segundoPlato, postre);
    const newDataGraph = [
      { tipo: "Grasas", valor: menuSumado.grasas },
      { tipo: "Grasas saturadas", valor: menuSumado.grasasSaturadas },
      { tipo: "Hidratos de carbono", valor: menuSumado.hidratosCarbono },
      { tipo: "Azúcares", valor: menuSumado.azucares },
      { tipo: "Fibra", valor: menuSumado.fibra },
      { tipo: "Proteínas", valor: menuSumado.proteinas },
      { tipo: "Sal", valor: menuSumado.sal },
    ];

    const newDataTable = [
      {
        tipo: "Calorías",
        valor: menuSumado.calorias,
        unidad: "kcal",
        grupo: "Etiqueta alimentaria",
        ingestaReferencia: 2000,
      },
      {
        tipo: "Grasas",
        valor: menuSumado.grasas,
        unidad: "g",
        grupo: "Etiqueta alimentaria",
        ingestaReferencia: 70,
      },
      {
        tipo: "Grasas saturadas",
        valor: menuSumado.grasasSaturadas,
        unidad: "g",
        grupo: "Etiqueta alimentaria",
        ingestaReferencia: 20,
      },
      {
        tipo: "Hidratos de carbono",
        valor: menuSumado.hidratosCarbono,
        unidad: "g",
        grupo: "Etiqueta alimentaria",
        ingestaReferencia: 260,
      },
      {
        tipo: "Azúcares",
        valor: menuSumado.azucares,
        unidad: "g",
        grupo: "Etiqueta alimentaria",
        ingestaReferencia: 90,
      },
      {
        tipo: "Fibra",
        valor: menuSumado.fibra,
        unidad: "g",
        grupo: "Etiqueta alimentaria",
        ingestaReferencia: 25,
      },
      {
        tipo: "Proteínas",
        valor: menuSumado.proteinas,
        unidad: "g",
        grupo: "Etiqueta alimentaria",
        ingestaReferencia: 50,
      },
      {
        tipo: "Sal",
        valor: menuSumado.sal,
        unidad: "g",
        grupo: "Etiqueta alimentaria",
        ingestaReferencia: 6,
      },
      {
        tipo: "Vitamina A",
        valor: menuSumado.vitaminaA,
        unidad: "µg",
        grupo: "Vitaminas",
        ingestaReferencia: 800,
      },
      {
        tipo: "Vitamina D",
        valor: menuSumado.vitaminaD,
        unidad: "µg",
        grupo: "Vitaminas",
        ingestaReferencia: 5,
      },
      {
        tipo: "Vitamina E",
        valor: menuSumado.vitaminaE,
        unidad: "mg",
        grupo: "Vitaminas",
        ingestaReferencia: 15,
      },
      {
        tipo: "Vitamina B9",
        valor: menuSumado.vitaminaB9,
        unidad: "µg",
        grupo: "Vitaminas",
        ingestaReferencia: 200,
      },
      {
        tipo: "Vitamina B3",
        valor: menuSumado.vitaminaB3,
        unidad: "mg",
        grupo: "Vitaminas",
        ingestaReferencia: 16,
      },

      {
        tipo: "Vitamina B2",
        valor: menuSumado.vitaminaB2,
        unidad: "mg",
        grupo: "Vitaminas",
        ingestaReferencia: 1.3,
      },
      {
        tipo: "Vitamina B1",
        valor: menuSumado.vitaminaB1,
        unidad: "mg",
        grupo: "Vitaminas",
        ingestaReferencia: 1.2,
      },
      {
        tipo: "Vitamina B12",
        valor: menuSumado.vitaminaB12,
        unidad: "µg",
        grupo: "Vitaminas",
        ingestaReferencia: 2.4,
      },
      {
        tipo: "Vitamina B6",
        valor: menuSumado.vitaminaB6,
        unidad: "mg",
        grupo: "Vitaminas",
        ingestaReferencia: 1.3,
      },
      {
        tipo: "Vitamina C",
        valor: menuSumado.vitaminaC,
        unidad: "mg",
        grupo: "Vitaminas",
        ingestaReferencia: 80,
      },
      {
        tipo: "Calcio",
        valor: menuSumado.calcio,
        unidad: "mg",
        grupo: "Minerales",
        ingestaReferencia: 1000,
      },
      {
        tipo: "Hierro",
        valor: menuSumado.hierro,
        unidad: "mg",
        grupo: "Minerales",
        ingestaReferencia: 18,
      },
      {
        tipo: "Potasio",
        valor: menuSumado.potasio,
        unidad: "mg",
        grupo: "Minerales",
        ingestaReferencia: 2000,
      },
      {
        tipo: "Magnesio",
        valor: menuSumado.magnesio,
        unidad: "mg",
        grupo: "Minerales",
        ingestaReferencia: 375,
      },
      {
        tipo: "Sodio",
        valor: menuSumado.sodio,
        unidad: "mg",
        grupo: "Minerales",
        ingestaReferencia: 2000,
      },
      {
        tipo: "Fósforo",
        valor: menuSumado.fosforo,
        unidad: "mg",
        grupo: "Minerales",
        ingestaReferencia: 700,
      },
      {
        tipo: "Selenio",
        valor: menuSumado.selenio,
        unidad: "µg",
        grupo: "Minerales",
        ingestaReferencia: 55,
      },
      {
        tipo: "Zinc",
        valor: menuSumado.zinc,
        unidad: "mg",
        grupo: "Minerales",
        ingestaReferencia: 11,
      },
    ];

    setChartData(newDataGraph);
    setRowData(newDataTable);
  }, [entrante, primerPlato, segundoPlato, postre]);

  const options = {
    data: chartData,
    series: [
      {
        type: "pie",
        angleKey: "valor",
        legendItemKey: "tipo",
        sectorLabel: {
          color: "white",
          fontWeight: "bold",
        },
      },
    ],
  };

  //
  //
  return (
    <>
      <Card className="my-3">
        <Card.Header>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setGrafico(true);
                  setTabla(false);
                }}
              >
                Gráfico
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setGrafico(false);
                  setTabla(true);
                }}
              >
                Tabla de nutrientes
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body className="p-4">
          {grafico && <AgChartsReact options={options} />}
          {tabla && <MenuDetailsTable rowData={rowData} colDefs={colDefs} />}
        </Card.Body>
      </Card>
    </>
  );
};

export default MenuDetailsGraph;
