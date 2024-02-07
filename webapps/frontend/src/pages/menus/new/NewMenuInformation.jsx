import { Card, Form } from "react-bootstrap";

const NewMenuInformation = () => {
  return (
    <Card className="mb-4">
      <Card.Header>
        <Card.Title className="text-center">Información sobre el menú</Card.Title>
      </Card.Header>
      <Card.Body className="p-4">
        <Form className="justify-content-md-center">
          <Form.Group className="mb-3">
            <Form.Label>Nombre del menú</Form.Label>
            <Form.Control name="nombre" type="text" placeholder="Menú del viernes" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción del menú</Form.Label>
            <Form.Control name="descripcion" type="text" placeholder="Este es el menú del día de los viernes" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha de publicación del menú</Form.Label>
            <Form.Control name="fecha" type="date" />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewMenuInformation;
