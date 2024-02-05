import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import NewPlatoListAlimentos from "./NewPlatoListAlimentos";
import NewPlatoInformation from "./NewPlatoInformation";

const NewPlato = () => {
  return (
    <>
      <Container className="mt-5">
        <h3 className="text-center">Creación de un nuevo plato</h3>

        <Row className="justify-content-center mt-4">
          <Col lg={5}>
            <NewPlatoInformation />
            <NewPlatoListAlimentos />
          </Col>
          <Col lg={7}>
            <Card className="mb-4">
              <Card.Header>
                <div className="d-block d-md-none">
                  <Nav variant="pills flex-column">
                    <Nav.Item className="my-1">
                      <Nav.Link as={NavLink} to="list">
                        Lista de alimentos
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="my-1">
                      <Nav.Link as={NavLink} to="search">
                        Buscar en Nutritionix
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="my-1">
                      <Nav.Link as={NavLink} to="create">
                        Crear a mano
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="d-none d-md-block">
                  <Nav variant="tabs">
                    <Nav.Item className="ms-2">
                      <Nav.Link as={NavLink} to="list">
                        Lista de alimentos
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ms-2">
                      <Nav.Link as={NavLink} to="search">
                        Buscar en Nutritionix
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ms-2">
                      <Nav.Link as={NavLink} to="create">
                        Crear a mano
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Card.Header>
              <Card.Body className="p-4">
                <Outlet />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="d-grid gap-3 mt-4 col-lg-4 col-xxl-3 mx-auto">
          <Button className="btn-primary" type="submit">
            Guardar
          </Button>
          <Button className="btn-danger">Cancelar</Button>
        </div>
      </Container>
    </>
  );
};

export default NewPlato;
