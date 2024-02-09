import { useEffect, useState } from "react";
import { Alert, Form, Button, Container, Card, InputGroup } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [userNotExists, setUserNotExists] = useState(false);
  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
  const [userObj, setUserObj] = useState([]);
  const [errorData, setErrorData] = useState([]);
  const history = useHistory();

  const handleCheckPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: 'POST',
        body: JSON.stringify({
          "usuario": usuario,
          "password": password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })

      const responseData = await response.json();

      if (response.ok) {
        if (response.status === 200) {
          setUserObj(responseData);
          history.push("/");
        }
      } else {
        setErrorData(responseData)
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
  }

  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(userObj));
  }, [userObj])

  return (
    <div className="gradient">
      <Container fluid className="d-flex justify-content-center align-items-center vh-100">
        <Card
          className="d-flex flex-column justify-content-center align-items-center py-4 shadow-lg"
          style={{ width: "25rem" }}
        >
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
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                />
              </InputGroup>

              <Form.Group className="mt-2 mb-1" controlId="formBasicPassword">

                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

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
    </div>
  );
};

export default Login;
