export const platoDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:8080/platos?id_plato=${id}`);

  if (!res.ok) {
    throw Error("No se pudo cargar el plato");
  }

  return res.json();
};
