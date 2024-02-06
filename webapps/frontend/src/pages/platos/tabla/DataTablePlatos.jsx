import DataTableHeader from "../../../utils/DataTableHeader";
import DataTableRowPlatos from "./DataTableRowPlatos";
import { UserContext } from "../../../contexts/UserContext";
import { Table, Container, Button } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import Loading from "../../../utils/Loading";
import { Link } from "react-router-dom";
import { DeleteModalPlato } from "../../../utils/platos/DeleteModalPlato";

const DataTablePlatos = () => {
  const valores = ["Nombre", "Tipo de plato", "Fecha de creación", "Fecha de modificación"];
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
    fetch(`http://localhost:8080/platos?id_empresa=${usuario.empresa.id}`)
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
      <Button className="mb-3" variant="primary" as={Link} to="/platos/new">
        Crear un nuevo plato
      </Button>
      <Table responsive striped bordered hover variant="tertiary">
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => <DataTableRowPlatos key={item.id} data={item} onDelete={handleDeleteButton} />)}
        </tbody>
        {showModal && <DeleteModalPlato item={selectedItem} show={showModal} handleClose={handleCloseModal} />}
      </Table>
    </Container>
  );
};

export default DataTablePlatos;
