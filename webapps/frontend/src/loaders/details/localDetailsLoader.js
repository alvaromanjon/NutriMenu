export const localDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:8080/locales?id_local=${id}`);

  if (!res.ok) {
    throw Error("No se pudo cargar el local");
  }

  return res.json();
};
