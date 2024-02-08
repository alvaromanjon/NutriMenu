export const alimentoDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:8080/alimentos?id_alimento=${id}`);

  if (!res.ok) {
    throw Error("No se pudo cargar el alimento");
  }

  return res.json();
};
