export const listEmpresasLoader = async () => {
  const res = await fetch("http://localhost:8080/empresas");

  if (!res.ok) {
    throw Error("No se pudo cargar la lista de empresas");
  }

  return res.json();
};
