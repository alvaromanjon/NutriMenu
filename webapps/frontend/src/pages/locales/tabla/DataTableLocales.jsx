import DataTableHeader from "../../../utils/DataTableHeader";
import DataTableRowLocales from "./DataTableRowLocales";
import { Table, Container, Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { DeleteModal } from "../../../utils/DeleteModal";
import { handleDeleteLocal } from "../../../utils/delete/handleDeleteLocal";

const DataTableLocales = () => {
  const valores = ["Nombre", "Email", "Dirección", "Teléfono", "Empresa"];
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
      <Button className="mb-3" variant="primary" as={Link} to="/locales/new">
        Crear un nuevo local
      </Button>
      <Table responsive striped bordered hover variant="tertiary">
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => <DataTableRowLocales key={item.id} data={item} onDelete={handleDeleteButton} />)}
        </tbody>
        {showModal && (
          <DeleteModal
            item={selectedItem}
            show={showModal}
            name="local"
            handleClose={handleCloseModal}
            deleteFunction={handleDeleteLocal}
          />
        )}
      </Table>
    </Container>
  );
};

export default DataTableLocales;
