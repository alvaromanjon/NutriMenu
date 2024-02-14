export const empresaDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:8080/empresas?id_empresa=${id}`);

  if (!res.ok) {
    throw Error("No se pudo cargar la empresa");
  }

  return res.json();
};
