export const listAlimentosLoader = async () => {
  const res = await fetch("http://localhost:8080/alimentos");

  if (!res.ok) {
    throw Error("No se pudo cargar la lista de alimentos");
  }

  return res.json();
};
