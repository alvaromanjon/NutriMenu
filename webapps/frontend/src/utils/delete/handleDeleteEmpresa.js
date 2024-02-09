export const handleDeleteEmpresa = async (item) => {
  fetch(`http://localhost:8080/empresas?id_empresa=${item.id}`, { method: "DELETE" })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error("Ha habido un error borrando el elemento: ", error);
    });
};
