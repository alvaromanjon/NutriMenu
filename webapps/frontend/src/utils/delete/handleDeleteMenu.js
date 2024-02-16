export const handleDeleteMenu = async (item) => {
  fetch(`http://localhost:8080/menus?id_menu=${item.id}`, { method: "DELETE" })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error("Ha habido un error borrando el elemento: ", error);
    });
};
