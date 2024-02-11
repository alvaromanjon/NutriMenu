import { useState } from "react";
import { Alert, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./styles.css";

const SelectMenuFromLocal = () => {
  const data = useLoaderData();
  const [fechaEscogida, setFechaEscogida] = useState("");

  const modifyFechaEscogida = (e) => {
    setFechaEscogida(e.currentTarget.value);
  };

  const menusFechaEscogida = () => {
    return data.filter((menu) => menu.fechaPublicacion === fechaEscogida);
  };

  const menusDisponibles = menusFechaEscogida();

  return (
    <>
      <Container fluid="md" className="position-relative mt-5">
        <Row className="justify-content-center align-items-center text-center">
          <Col>
            <Card className="shadow-lg">
              <Card.Header>
                <Card.Title>
                  <h3 className="pt-2">Escoge una fecha para ver los menús disponibles</h3>
                </Card.Title>
              </Card.Header>

              <Row>
                <Col className="col-1"></Col>
                <Col>
                  <Card.Body className="mb-4">
                    <Form>
                      <Form.Group className="mb-4">
                        <Form.Control
                          name="fechaEscogida"
                          type="date"
                          value={fechaEscogida}
                          onChange={modifyFechaEscogida}
                        />
                      </Form.Group>
                    </Form>
                    {menusDisponibles.length !== 0 ? (
                      menusDisponibles.map((menu) => (
                        <Card key={menu.id} className="mt-3 menu-card">
                          <Card.Body>
                            <Card.Title>{menu.nombre}</Card.Title>
                            <Card.Subtitle className="text-muted mt-2">
                              Contiene {menu.platos.length} {menu.platos.length > 1 ? "platos" : "plato"}
                            </Card.Subtitle>
                            <Card.Text className="mt-2">{menu.descripcion}</Card.Text>
                          </Card.Body>
                        </Card>
                      ))
                    ) : (
                      <Alert variant="light" className="mt-3">
                        No hay menús disponibles para esta fecha
                      </Alert>
                    )}
                  </Card.Body>
                </Col>
                <Col className="col-1"></Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SelectMenuFromLocal;
