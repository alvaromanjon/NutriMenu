const ListLocalesEmpresaLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:8080/locales?id_empresa=${id}`);

  if (!res.ok) {
    throw Error("No se pudo cargar la lista de locales");
  }

  return res.json();
};

export default ListLocalesEmpresaLoader;
