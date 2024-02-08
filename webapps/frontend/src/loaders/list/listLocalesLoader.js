export const listLocalesLoader = async () => {
  const res = await fetch("http://localhost:8080/locales");

  if (!res.ok) {
    throw Error("No se pudo cargar la lista de locales");
  }

  return res.json();
};
