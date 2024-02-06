import DataTableHeader from "../../../utils/DataTableHeader";
import DataTableRowMenus from "./DataTableRowMenus";
import { UserContext } from "../../../contexts/UserContext";
import { Table, Container } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import Loading from "../../../utils/Loading";
import { DeleteModal } from "../../../utils/DeleteModal";
import { handleDeleteMenu } from "../../../utils/delete/handleDeleteMenu";

const DataTableMenus = () => {
  const valores = ["Nombre", "Descripción", "Fecha de creación", "Fecha de modificación"];
  const { usuario } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDeleteButton = (item) => {
    setSelectedItem(item);
    handleShowModal();
  };

  useEffect(() => {
    fetch(`http://localhost:8080/menus?id_local=${usuario.local.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((error) => {
        console.error("Ha habido un error obteniendo los datos: ", error);
        setIsPending("false");
      });
  });

  if (isPending) {
    return <Loading />;
  }

  return (
    <Container className="mt-3">
      <Table responsive striped bordered hover variant="tertiary">
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => <DataTableRowMenus key={item.id} data={item} onDelete={handleDeleteButton} />)}
        </tbody>
        {showModal && (
          <DeleteModal
            item={selectedItem}
            show={showModal}
            name="menú"
            handleClose={handleCloseModal}
            deleteFunction={handleDeleteMenu}
          />
        )}
      </Table>
    </Container>
  );
};

export default DataTableMenus;
