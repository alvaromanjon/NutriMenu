import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AgChartsReact } from "ag-charts-react";
import AlimentoDetailsTable from "./AlimentoDetailsTable";
import { Col, Container, Row } from "react-bootstrap";

const AlimentoDetails = () => {
  const alimento = useLoaderData();
  const [chartOptions, setChartOptions] = useState({
    data: [
      { tipo: "Grasas", valor: alimento[0].componentesNutricionales.grasas },
      { tipo: "Grasas saturadas", valor: alimento[0].componentesNutricionales.grasasSaturadas },
      { tipo: "Hidratos de carbono", valor: alimento[0].componentesNutricionales.hidratosCarbono },
      { tipo: "Azúcares", valor: alimento[0].componentesNutricionales.azucares },
      { tipo: "Fibra", valor: alimento[0].componentesNutricionales.fibra },
      { tipo: "Proteínas", valor: alimento[0].componentesNutricionales.proteinas },
      { tipo: "Sal", valor: alimento[0].componentesNutricionales.sal },
    ],
    // Series: Defines which chart type and data to use
    series: [{ type: "pie", angleKey: "valor", legendItemKey: "tipo" }],
  });

  // Row Data: Defines & controls grid data.
  const [rowData, setRowData] = useState([
    {
      tipo: "Calorías",
      valor: alimento[0].componentesNutricionales.calorias,
      unidad: "kcal",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 2000,
    },
    {
      tipo: "Grasas",
      valor: alimento[0].componentesNutricionales.grasas,
      unidad: "g",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 70,
    },
    {
      tipo: "Grasas saturadas",
      valor: alimento[0].componentesNutricionales.grasasSaturadas,
      unidad: "g",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 20,
    },
    {
      tipo: "Hidratos de carbono",
      valor: alimento[0].componentesNutricionales.hidratosCarbono,
      unidad: "g",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 260,
    },
    {
      tipo: "Azúcares",
      valor: alimento[0].componentesNutricionales.azucares,
      unidad: "g",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 90,
    },
    {
      tipo: "Fibra",
      valor: alimento[0].componentesNutricionales.fibra,
      unidad: "g",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 25,
    },
    {
      tipo: "Proteínas",
      valor: alimento[0].componentesNutricionales.proteinas,
      unidad: "g",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 50,
    },
    {
      tipo: "Sal",
      valor: alimento[0].componentesNutricionales.sal,
      unidad: "g",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 6,
    },
    {
      tipo: "Vitamina A",
      valor: alimento[0].componentesNutricionales.vitaminas.vitaminaA,
      unidad: "µg",
      grupo: "Vitaminas",
      ingestaReferencia: 800,
    },
    {
      tipo: "Vitamina D",
      valor: alimento[0].componentesNutricionales.vitaminas.vitaminaD,
      unidad: "µg",
      grupo: "Vitaminas",
      ingestaReferencia: 5,
    },
    {
      tipo: "Vitamina E",
      valor: alimento[0].componentesNutricionales.vitaminas.vitaminaE,
      unidad: "mg",
      grupo: "Vitaminas",
      ingestaReferencia: 15,
    },
    {
      tipo: "Vitamina B9",
      valor: alimento[0].componentesNutricionales.vitaminas.vitaminaB9,
      unidad: "µg",
      grupo: "Vitaminas",
      ingestaReferencia: 200,
    },
    {
      tipo: "Vitamina B3",
      valor: alimento[0].componentesNutricionales.vitaminas.vitaminaB3,
      unidad: "mg",
      grupo: "Vitaminas",
      ingestaReferencia: 16,
    },

    {
      tipo: "Vitamina B2",
      valor: alimento[0].componentesNutricionales.vitaminas.vitaminaB2,
      unidad: "mg",
      grupo: "Vitaminas",
      ingestaReferencia: 1.3,
    },
    {
      tipo: "Vitamina B1",
      valor: alimento[0].componentesNutricionales.vitaminas.vitaminaB1,
      unidad: "mg",
      grupo: "Vitaminas",
      ingestaReferencia: 1.2,
    },
    {
      tipo: "Vitamina B12",
      valor: alimento[0].componentesNutricionales.vitaminas.vitaminaB12,
      unidad: "µg",
      grupo: "Vitaminas",
      ingestaReferencia: 2.4,
    },
    {
      tipo: "Vitamina B6",
      valor: alimento[0].componentesNutricionales.vitaminas.vitaminaB6,
      unidad: "mg",
      grupo: "Vitaminas",
      ingestaReferencia: 1.3,
    },
    {
      tipo: "Vitamina C",
      valor: alimento[0].componentesNutricionales.vitaminas.vitaminaC,
      unidad: "mg",
      grupo: "Vitaminas",
      ingestaReferencia: 80,
    },
    {
      tipo: "Calcio",
      valor: alimento[0].componentesNutricionales.minerales.calcio,
      unidad: "mg",
      grupo: "Minerales",
      ingestaReferencia: 1000,
    },
    {
      tipo: "Hierro",
      valor: alimento[0].componentesNutricionales.minerales.hierro,
      unidad: "mg",
      grupo: "Minerales",
      ingestaReferencia: 18,
    },
    {
      tipo: "Potasio",
      valor: alimento[0].componentesNutricionales.minerales.potasio,
      unidad: "mg",
      grupo: "Minerales",
      ingestaReferencia: 2000,
    },
    {
      tipo: "Magnesio",
      valor: alimento[0].componentesNutricionales.minerales.magnesio,
      unidad: "mg",
      grupo: "Minerales",
      ingestaReferencia: 375,
    },
    {
      tipo: "Sodio",
      valor: alimento[0].componentesNutricionales.minerales.sodio,
      unidad: "mg",
      grupo: "Minerales",
      ingestaReferencia: 2000,
    },
    {
      tipo: "Fósforo",
      valor: alimento[0].componentesNutricionales.minerales.fosforo,
      unidad: "mg",
      grupo: "Minerales",
      ingestaReferencia: 700,
    },
    {
      tipo: "Selenio",
      valor: alimento[0].componentesNutricionales.minerales.selenio,
      unidad: "µg",
      grupo: "Minerales",
      ingestaReferencia: 55,
    },
    {
      tipo: "Zinc",
      valor: alimento[0].componentesNutricionales.minerales.zinc,
      unidad: "mg",
      grupo: "Minerales",
      ingestaReferencia: 11,
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "tipo", sortable: true, filter: true },
    { field: "grupo", sortable: true, filter: true },
    { field: "valor", sortable: true, filter: true },
    { field: "ingestaReferencia", sortable: false, filter: false },
    { field: "unidad", sortable: false, filter: true },
  ]);

  return (
    <Container>
      <Row>
        <Col className="text-center mb-4">
          <h3>Detalles de {alimento[0].nombre}</h3>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <AgChartsReact options={chartOptions} />
        </Col>
        <Col md={6}>
          <AlimentoDetailsTable rowData={rowData} colDefs={colDefs} />
        </Col>
      </Row>
    </Container>
  );
};

export default AlimentoDetails;
