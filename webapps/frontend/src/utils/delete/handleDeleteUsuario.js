export const handleDeleteUsuario = (item) => {
  fetch(`http://localhost:8080/usuarios?id_usuario=${item.id}`, { method: "DELETE" })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error("Ha habido un error borrando el elemento: ", error);
    });
};
