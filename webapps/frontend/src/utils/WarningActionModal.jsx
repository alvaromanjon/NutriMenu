import { Button, Modal } from "react-bootstrap";

export const WarningActionModal = ({ show, handleClose, title, message, firstButton, secondButton, action }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {firstButton}
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              action();
            }}
          >
            {secondButton}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
