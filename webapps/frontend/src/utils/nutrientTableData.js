export const NutrientTableData = (data) => {
  return [
    {
      tipo: "Calorías",
      valor: data.calorias,
      unidad: "kcal",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 2000,
    },
    {
      tipo: "Grasas",
      valor: data.grasas,
      unidad: "g",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 70,
    },
    {
      tipo: "Grasas saturadas",
      valor: data.grasasSaturadas,
      unidad: "g",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 20,
    },
    {
      tipo: "Hidratos de carbono",
      valor: data.hidratosCarbono,
      unidad: "g",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 260,
    },
    {
      tipo: "Azúcares",
      valor: data.azucares,
      unidad: "g",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 90,
    },
    {
      tipo: "Fibra",
      valor: data.fibra,
      unidad: "g",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 25,
    },
    {
      tipo: "Proteínas",
      valor: data.proteinas,
      unidad: "g",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 50,
    },
    {
      tipo: "Sal",
      valor: data.sal,
      unidad: "g",
      grupo: "Etiqueta alimentaria",
      ingestaReferencia: 6,
    },
    {
      tipo: "Vitamina A",
      valor: data.vitaminaA,
      unidad: "µg",
      grupo: "Vitaminas",
      ingestaReferencia: 800,
      nombreAlternativo: "Retinol",
    },
    {
      tipo: "Vitamina D",
      valor: data.vitaminaD,
      unidad: "µg",
      grupo: "Vitaminas",
      ingestaReferencia: 15,
      nombreAlternativo: "Calciferol",
    },
    {
      tipo: "Vitamina E",
      valor: data.vitaminaE,
      unidad: "mg",
      grupo: "Vitaminas",
      ingestaReferencia: 12,
      nombreAlternativo: "Tocoferol",
    },
    {
      tipo: "Vitamina B9",
      valor: data.vitaminaB9,
      unidad: "µg",
      grupo: "Vitaminas",
      ingestaReferencia: 200,
      nombreAlternativo: "Ácido fólico",
    },
    {
      tipo: "Vitamina B3",
      valor: data.vitaminaB3,
      unidad: "mg",
      grupo: "Vitaminas",
      ingestaReferencia: 16,
      nombreAlternativo: "Niacina",
    },

    {
      tipo: "Vitamina B2",
      valor: data.vitaminaB2,
      unidad: "mg",
      grupo: "Vitaminas",
      ingestaReferencia: 1.4,
      nombreAlternativo: "Riboflavina",
    },
    {
      tipo: "Vitamina B1",
      valor: data.vitaminaB1,
      unidad: "mg",
      grupo: "Vitaminas",
      ingestaReferencia: 1.2,
      nombreAlternativo: "Tiamina",
    },
    {
      tipo: "Vitamina B12",
      valor: data.vitaminaB12,
      unidad: "µg",
      grupo: "Vitaminas",
      ingestaReferencia: 2.5,
      nombreAlternativo: "Cobalamina",
    },
    {
      tipo: "Vitamina B6",
      valor: data.vitaminaB6,
      unidad: "mg",
      grupo: "Vitaminas",
      ingestaReferencia: 1.4,
      nombreAlternativo: "Piridoxina",
    },
    {
      tipo: "Vitamina C",
      valor: data.vitaminaC,
      unidad: "mg",
      grupo: "Vitaminas",
      ingestaReferencia: 80,
      nombreAlternativo: "Ácido ascórbico",
    },
    {
      tipo: "Calcio",
      valor: data.calcio,
      unidad: "mg",
      grupo: "Minerales",
      ingestaReferencia: 1000,
    },
    {
      tipo: "Hierro",
      valor: data.hierro,
      unidad: "mg",
      grupo: "Minerales",
      ingestaReferencia: 18,
    },
    {
      tipo: "Potasio",
      valor: data.potasio,
      unidad: "mg",
      grupo: "Minerales",
      ingestaReferencia: 2000,
    },
    {
      tipo: "Magnesio",
      valor: data.magnesio,
      unidad: "mg",
      grupo: "Minerales",
      ingestaReferencia: 375,
    },
    {
      tipo: "Sodio",
      valor: data.sodio,
      unidad: "mg",
      grupo: "Minerales",
      ingestaReferencia: 1700,
    },
    {
      tipo: "Fósforo",
      valor: data.fosforo,
      unidad: "mg",
      grupo: "Minerales",
      ingestaReferencia: 700,
    },
    {
      tipo: "Selenio",
      valor: data.selenio,
      unidad: "µg",
      grupo: "Minerales",
      ingestaReferencia: 55,
    },
    {
      tipo: "Zinc",
      valor: data.zinc,
      unidad: "mg",
      grupo: "Minerales",
      ingestaReferencia: 11,
    },
  ];
};

export const NutrientTableHeader = () => {
  return [
    { headerName: "Componente", field: "tipo", sortable: true, filter: true },
    {
      field: "valor",
      sortable: true,
      filter: true,
      valueFormatter: (params) => {
        return `${Number(params.value).toFixed(2)}` + ` ${params.data.unidad}`;
      },
    },
    {
      headerName: "Ingesta de referencia",
      field: "ingestaReferencia",
      sortable: false,
      filter: false,
      valueFormatter: (params) => {
        return `${params.value}` + ` ${params.data.unidad}`;
      },
    },
    { headerName: "Grupo del componente", field: "grupo", sortable: true, filter: true },
    { headerName: "Nombre alternativo", field: "nombreAlternativo", sortable: false, filter: true },
  ];
};

export const NutrientTableStyle = (params) => {
  if (params.data.valor > params.data.ingestaReferencia) {
    return { background: "#FCD3D0" };
  }
  if (params.data.valor > params.data.ingestaReferencia * 0.8) {
    return { background: "#FFF2CC" };
  }
};
