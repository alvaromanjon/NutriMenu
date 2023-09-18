import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container className="d-flex flex-column min-vh-100 justify-content-center">
      <Row className="justify-content-md-center">
        <Col md="4">
          <Card className="px-5 shadow-lg" style={{ width: "30rem" }}>
            <Card.Body>
              <h2 className="text-center mt-5">NutriMenu</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className=" mt-3 mb-1">Introduce tu correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className=" mt-3 mb-1">Introduce tu contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button className="d-flex justify-content-center mx-auto mt-4 mb-3 px-3" variant="dark" type="submit">
                  Iniciar sesión
                </Button>
              </Form>
              <Button
                className="d-flex justify-content-center mx-auto mt-2 mb-4 px-3"
                variant="light"
                type="submit"
                size="sm"
              >
                Registro
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
