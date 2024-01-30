import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const NewAlimento = () => {
  return (
    <Container className="mt-5">
      <h3 className="text-center">Creación de un nuevo alimento</h3>
      <h5 className="text-center mt-3">¿Cómo quieres crear el alimento?</h5>
      <Row className="justify-content-center mb-4">
        <Col xs="auto">
          <Button variant="primary" as={Link} to="search" className="me-2 mt-2">
            Buscar en Nutritionix
          </Button>
          <Button variant="secondary" className="ms-2 mt-2" as={Link} to="create">
            Crear a mano
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body className="p-4">
              <Outlet />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewAlimento;
