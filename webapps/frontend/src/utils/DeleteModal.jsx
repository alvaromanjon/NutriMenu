import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const DeleteModal = ({ item, show, name, handleClose, deleteFunction }) => {
  const navigate = useNavigate();
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
              navigate(0);
            }}
          >
            Sí, borrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
