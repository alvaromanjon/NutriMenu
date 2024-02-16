import { useState, useContext } from "react";
import { Alert, Form, Button, Container, Card, InputGroup, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";
import { UserContext } from "../../contexts/UserContext";
import { KeyFill } from "react-bootstrap-icons";

const Login = () => {
  const [usuarioValue, setUsuarioValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [userNotExists, setUserNotExists] = useState(false);
  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
  const [errorData, setErrorData] = useState([]);
  const { setUsuario } = useContext(UserContext);
  const navigate = useNavigate();

  const handleCheckPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify({
          usuario: usuarioValue,
          password: passwordValue,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const responseData = await response.json();

      if (response.ok) {
        setUsuario(responseData);
        navigate("/");
      } else {
        setErrorData(responseData);
        if (response.status === 400) {
          setUserNotExists(true);
          setPasswordsDontMatch(false);
          console.error("No existe el usuario: ", errorData);
        } else if (response.status === 401) {
          setUserNotExists(false);
          setPasswordsDontMatch(true);
          console.error("Contraseña incorrecta: ", errorData);
        }
      }
    } catch (error) {
      console.error("Error desconocido: ", error);
    }
  };

  return (
    <Container fluid className="position-relative">
      <Row className="justify-content-center align-items-center" style={{ height: "80vh" }}>
        <Col>
          <Card className="align-items-center py-4 shadow-lg mx-auto" style={{ maxWidth: "500px" }}>
            <Card.Body>
              <h2 className="text-center mt-5">NutriMenu</h2>
              <h5 className="text-center mt-1">Inicio de sesión</h5>
              <Form onSubmit={handleCheckPassword}>
                <InputGroup className="mt-3 mb-1">
                  <InputGroup.Text id="usuario-at">@</InputGroup.Text>
                  <Form.Control
                    type="username"
                    placeholder="Nombre de usuario"
                    aria-label="Nombre de usuario"
                    aria-describedby="usuario-at"
                    value={usuarioValue}
                    onChange={(e) => setUsuarioValue(e.target.value)}
                  />
                </InputGroup>

                <Form.Group className="mt-2 mb-1" controlId="formBasicPassword">
                  <InputGroup className="mt-3 mb-1">
                    <InputGroup.Text id="password-symbol">
                      <KeyFill />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      aria-describedby="password-symbol"
                      placeholder="Contraseña"
                      value={passwordValue}
                      onChange={(e) => setPasswordValue(e.target.value)}
                    />
                  </InputGroup>

                  {userNotExists && (
                    <Alert className="mt-3 mb-1" variant="danger">
                      No hay ningún usuario con este nombre de usuario
                    </Alert>
                  )}

                  {passwordsDontMatch && (
                    <Alert className="mt-3 mb-1" variant="danger">
                      La contraseña es incorrecta
                    </Alert>
                  )}
                </Form.Group>
                <Button className="mt-1 text-decoration-none" variant="link" as={Link} to="/forgot-password">
                  ¿Has olvidado tu contraseña?
                </Button>

                <Button className="d-flex justify-content-center mx-auto mt-2 mb-2 px-3" variant="dark" type="submit">
                  Iniciar sesión
                </Button>
              </Form>
              <Button
                className="d-flex justify-content-center mx-auto mt-1 mb-4 px-3"
                variant="light"
                type="submit"
                size="sm"
                onClick={() => {
                  navigate("/");
                }}
              >
                Acceder como cliente
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
