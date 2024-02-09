export const handleDeletePlato = async (item) => {
  fetch(`http://localhost:8080/platos?id_plato=${item.id}`, { method: "DELETE" })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error("Ha habido un error borrando el elemento: ", error);
    });
};
