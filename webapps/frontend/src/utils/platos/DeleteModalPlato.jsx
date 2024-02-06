import { Button, Modal } from "react-bootstrap";
import { handleDeletePlato } from "./handleDeletePlato";

export const DeleteModalPlato = ({ item, show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Borrar plato</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Realmente quieres borrar el plato {item.nombre}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              handleDeletePlato(item);
            }}
          >
            Sí, borrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
