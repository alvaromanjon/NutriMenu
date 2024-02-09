export const handleDeleteLocal = async (item) => {
  fetch(`http://localhost:8080/locales?id_local=${item.id}`, { method: "DELETE" })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error("Ha habido un error borrando el elemento: ", error);
    });
};
