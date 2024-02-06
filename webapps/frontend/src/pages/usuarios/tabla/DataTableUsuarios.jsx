import { useState } from "react";
import DataTableHeader from "../../../utils/DataTableHeader";
import DataTableRowUsuarios from "./DataTableRowUsuarios";
import { Table, Container, Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { DeleteModal } from "../../../utils/DeleteModal";
import { handleDeleteUsuario } from "../../../utils/delete/handleDeleteUsuario";

const DataTableUsuarios = () => {
  const valores = ["Usuario", "Nombre", "Email", "Rol", "Empresa", "Local"];
  const data = useLoaderData();
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDeleteButton = (item) => {
    setSelectedItem(item);
    handleShowModal();
  };

  return (
    <Container className="mt-3">
      <Button className="mb-3" variant="primary" as={Link} to="/usuarios/new">
        Crear un nuevo usuario
      </Button>
      <Table responsive striped bordered hover variant="tertiary">
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => <DataTableRowUsuarios key={item.id} data={item} onDelete={handleDeleteButton} />)}
        </tbody>
        {showModal && (
          <DeleteModal
            item={selectedItem}
            show={showModal}
            name="alimento"
            handleClose={handleCloseModal}
            deleteFunction={handleDeleteUsuario}
          />
        )}
      </Table>
    </Container>
  );
};

export default DataTableUsuarios;
