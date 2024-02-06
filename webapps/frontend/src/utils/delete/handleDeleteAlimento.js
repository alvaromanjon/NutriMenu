export const handleDeleteAlimento = (item) => {
  fetch(`http://localhost:8080/alimentos?id_alimento=${item.id}`, { method: "DELETE" })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error("Ha habido un error borrando el elemento: ", error);
    });
};
