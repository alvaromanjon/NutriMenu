export const NutrientChartData = (data) => {
  return [
    { tipo: "Grasas", valor: data.grasas },
    { tipo: "Grasas saturadas", valor: data.grasasSaturadas },
    { tipo: "Hidratos de carbono", valor: data.hidratosCarbono },
    { tipo: "Azúcares", valor: data.azucares },
    { tipo: "Fibra", valor: data.fibra },
    { tipo: "Proteínas", valor: data.proteinas },
    { tipo: "Sal", valor: data.sal },
  ];
};

export const NutrientChartOptions = (chartData) => {
  return {
    data: chartData,
    autoSize: true,
    height: 500,
    series: [
      {
        type: "pie",
        angleKey: "valor",
        calloutLabelKey: "tipo",
        calloutLabel: {
          formatter: ({ value }) => `${value} (g)`,
        },
      },
    ],
  };
};
