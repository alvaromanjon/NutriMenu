import { Button, Modal } from "react-bootstrap";

export const DeleteModal = ({ item, show, name, handleClose, deleteFunction }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Borrar {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Realmente quieres borrar el elemento {item.nombre}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              deleteFunction(item);
            }}
          >
            Sí, borrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
