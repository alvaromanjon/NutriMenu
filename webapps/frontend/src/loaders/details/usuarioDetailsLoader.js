export const usuarioDetaisLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:8080/usuarios?id_usuario=${id}`);

  if (!res.ok) {
    throw Error("No se pudo cargar el usuario");
  }

  return res.json();
};
