import { useState } from "react";
import { Form, Button, Container, Card, InputGroup, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const ForgotPassword = () => {
  const [userExists, setUserExists] = useState(false);
  const [userNotExists, setUserNotExists] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [usuarioActualizar, setUsuarioActualizar] = useState([]);
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [errorData, setErrorData] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/usuarios?usuario=${usuario}`, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          setErrorData(res);
          if (res.status === 400) {
            setUserNotExists(true);
            console.error("No existe el usuario: ", errorData);
          }
        }
        setUserExists(true);
        return res.json();
      })
      .then((data) => {
        setUsuarioActualizar(data[0]);
      });
  };

  const handleChange = async (e) => {
    e.preventDefault();
    if (newPassword !== repeatNewPassword) {
      setPasswordsDontMatch(true);
      setPasswordsMatch(false);
    } else {
      setPasswordsDontMatch(false);
      setPasswordsMatch(true);

      fetch(`http://localhost:8080/usuarios?id_usuario=${usuarioActualizar.id}`, {
        method: "PUT",
        body: JSON.stringify({
          password: newPassword,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          if (!res.ok) {
            setErrorData(res);
            if (res.status === 400) {
              setUserNotExists(true);
              console.error("No existe el usuario: ", errorData);
            }
          }
          return res.json();
        })
        .then((data) => {
          setUsuarioActualizar(data);
        });
    }

    setTimeout(() => {
      navigate("/login");
    }, 800);
  };

  const showCheckUser = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Label className=" mt-3 mb-1">Introduce tu nombre de usuario actual</Form.Label>
        <InputGroup>
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

        {userNotExists && (
          <Alert className="mt-3" variant="danger">
            No hay ningún usuario con este nombre de usuario
          </Alert>
        )}

        <Button className="d-flex justify-content-center mx-auto mt-4 mb-3 px-3" variant="dark" type="submit">
          Continuar
        </Button>
      </Form>
    );
  };

  const showSetPassword = () => {
    return (
      <Form onSubmit={handleChange}>
        <Form.Group controlId="formPassword">
          <Form.Label className=" mt-1 mb-1">Introduce tu nueva contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formRepeatPassword">
          <Form.Label className=" mt-3 mb-1">Repite tu nueva contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={repeatNewPassword}
            onChange={(e) => setRepeatNewPassword(e.target.value)}
          />
        </Form.Group>
        {passwordsDontMatch && (
          <Alert className="mt-3" variant="danger">
            Las contraseñas no coinciden
          </Alert>
        )}
        {passwordsMatch && (
          <Alert className="mt-3" variant="success">
            La contraseña se ha actualizado correctamente
          </Alert>
        )}
        <Button className="d-flex justify-content-center mx-auto mt-4 mb-3 px-3" variant="dark" type="submit">
          Continuar
        </Button>
      </Form>
    );
  };

  return (
    <div className="gradient">
      <Container fluid className="d-flex justify-content-center align-items-center vh-100">
        <Card
          className="d-flex flex-column justify-content-center align-items-center py-4 shadow-lg"
          style={{ width: "25rem" }}
        >
          <Card.Body>
            <h2 className="text-center mt-5">NutriMenu</h2>
            <h5 className="text-center mt-1">Recuperar contraseña</h5>
            {!userExists ? showCheckUser() : showSetPassword()}
            <Button
              className="d-flex justify-content-center mx-auto mt-2 mb-4 px-3"
              variant="light"
              type="submit"
              size="sm"
              onClick={() => {
                navigate(-1);
              }}
            >
              Volver
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ForgotPassword;
