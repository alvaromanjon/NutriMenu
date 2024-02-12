export const menuDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:8080/menus?id_menu=${id}`);

  if (!res.ok) {
    throw Error("No se pudo cargar el menú");
  }

  return res.json();
};
