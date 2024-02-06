import DataTableHeader from "../../../utils/DataTableHeader";
import DataTableRowEmpresas from "./DataTableRowEmpresas";
import { Table, Container, Button } from "react-bootstrap";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { DeleteModal } from "../../../utils/DeleteModal";
import { handleDeleteEmpresa } from "../../../utils/delete/handleDeleteEmpresa";

const DataTableEmpresas = () => {
  const valores = ["CIF", "Nombre", "Email", "Dirección", "Teléfono"];
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
      <Button className="mb-3" variant="primary" as={Link} to="/empresas/new">
        Crear una nueva empresa
      </Button>
      <Table responsive striped bordered hover variant="tertiary">
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => <DataTableRowEmpresas key={item.id} data={item} onDelete={handleDeleteButton} />)}
        </tbody>
        {showModal && (
          <DeleteModal
            item={selectedItem}
            show={showModal}
            name="empresa"
            handleClose={handleCloseModal}
            deleteFunction={handleDeleteEmpresa}
          />
        )}
      </Table>
    </Container>
  );
};

export default DataTableEmpresas;
