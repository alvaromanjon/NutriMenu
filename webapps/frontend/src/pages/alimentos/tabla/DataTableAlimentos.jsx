import DataTableHeader from "../../../utils/DataTableHeader";
import DataTableRowAlimentos from "./DataTableRowAlimentos";
import { Button, Table, Container } from "react-bootstrap";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { DeleteModal } from "../../../utils/DeleteModal";
import { handleDeleteAlimento } from "../../../utils/delete/handleDeleteAlimento";

const DataTableAlimentos = () => {
  const valores = ["Nombre", "Grupo alimenticio", "Gramos por ración"];
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
      <Button className="mb-3" variant="primary" as={Link} to="/alimentos/new/search">
        Crear un nuevo alimento
      </Button>
      <Table responsive striped bordered hover variant="tertiary">
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => <DataTableRowAlimentos key={item.id} data={item} onDelete={handleDeleteButton} />)}
        </tbody>
        {showModal && (
          <DeleteModal
            item={selectedItem}
            show={showModal}
            name="alimento"
            handleClose={handleCloseModal}
            deleteFunction={handleDeleteAlimento}
          />
        )}
      </Table>
    </Container>
  );
};

export default DataTableAlimentos;
