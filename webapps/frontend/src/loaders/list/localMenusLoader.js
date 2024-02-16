export const localMenusLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:8080/menus?id_local=${id}`);

  if (!res.ok) {
    throw Error("No se pudieron cargar los menús del local seleccionado");
  }

  return res.json();
};
