import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="d-flex flex-column justify-content-center align-items-center py-4 shadow-lg"
        style={{ width: "25rem" }}
      >
        <Card.Body>
          <h2 className="text-center mt-5">NutriMenu</h2>
          <h5 className="text-center mt-1">Inicio de sesión</h5>
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
            <Button className="mt-3 text-decoration-none" variant="link" as={Link} to="/forgot-password">
              ¿Has olvidado tu contraseña?
            </Button>

            <Button className="d-flex justify-content-center mx-auto mt-2 mb-3 px-3" variant="dark" type="submit">
              Iniciar sesión
            </Button>
          </Form>
          <Button
            className="d-flex justify-content-center mx-auto mt-2 mb-4 px-3"
            variant="light"
            type="submit"
            size="sm"
            onClick={() => {
              history.push("/register");
            }}
          >
            Registro
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
