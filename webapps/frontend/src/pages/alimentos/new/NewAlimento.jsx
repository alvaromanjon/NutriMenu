import { Container, Card, Row, Col, Nav } from "react-bootstrap";
import { Outlet, NavLink } from "react-router-dom";

const NewAlimento = () => {
  return (
    <Container className="mt-5">
      <h3 className="text-center">Creación de un nuevo alimento</h3>
      <h5 className="text-center mt-3">¿Cómo quieres crear el alimento?</h5>

      <Row className="justify-content-center mt-4">
        <Col md={10}>
          <Card>
            <Card.Header>
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link as={NavLink} to="search">
                    Buscar en Nutritionix
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={NavLink} to="create">
                    Crear a mano
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
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
