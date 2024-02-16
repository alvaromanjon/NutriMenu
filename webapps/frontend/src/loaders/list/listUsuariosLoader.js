export const listUsuariosLoader = async () => {
  const res = await fetch("http://localhost:8080/usuarios");

  if (!res.ok) {
    throw Error("No se pudo cargar la lista de usuarios");
  }

  return res.json();
};
