import { useState } from "react";
import { Form, Button, Container, Card, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./styles.css";

const Register = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [local, setLocal] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Usuario:", usuario);
    console.log("Password:", password);
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Rol:", rol);
    console.log("Empresa:", empresa);
    console.log("Local:", local);
  };

  const showSeleccionEmpresa = () => {
    if (rol != "" && rol != 1) {
      return (
        <Form.Group controlId="formSeleccionEmpresa">
          <Form.Label className=" mt-3 mb-1">Selecciona tu empresa</Form.Label>
          <Form.Select aria-label="Selecciona tu empresa" onChange={(e) => setEmpresa(e.target.value)}>
            <option value=""></option>
            <option value="1">Empresa 1</option>
            <option value="2">Empresa 2</option>
            <option value="3">Empresa 3</option>
          </Form.Select>
        </Form.Group>
      );
    }
  };

  const showSeleccionLocal = () => {
    if (rol != 1 && empresa != "") {
      return (
        <Form.Group controlId="formSeleccionLocal">
          <Form.Label className=" mt-3 mb-1">Selecciona tu local</Form.Label>
          <Form.Select aria-label="Selecciona tu local" onChange={(e) => setLocal(e.target.value)}>
            <option value=""></option>
            <option value="1">Local 1</option>
            <option value="2">Local 2</option>
            <option value="3">Local 3</option>
          </Form.Select>
        </Form.Group>
      );
    }
  };

  return (
    <div className="gradient">
      <Container fluid className="d-flex justify-content-center align-items-center vh-100">
        <Card
          className="d-flex flex-column justify-content-center align-items-center py-4 shadow-lg"
          style={{ width: "30rem" }}
        >
          <Card.Body>
            <h2 className="text-center mt-5">NutriMenu</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Label className=" mt-3 mb-1">Introduce tu nombre de usuario deseado</Form.Label>
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

              <Form.Group controlId="formPassword">
                <Form.Label className=" mt-3 mb-1">Introduce tu contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formName">
                <Form.Label className=" mt-3 mb-1">Introduce tu nombre</Form.Label>
                <Form.Control type="name" placeholder="" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className=" mt-3 mb-1">Introduce tu correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="hola@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formSelectRol">
                <Form.Label className=" mt-3 mb-1">Selecciona el rol de tu usuario</Form.Label>
                <Form.Select aria-label="Selecciona el rol de tu usuario" onChange={(e) => setRol(e.target.value)}>
                  <option value=""></option>
                  <option value="1">Administrador</option>
                  <option value="2">Editor</option>
                  <option value="3">Camarero</option>
                </Form.Select>
              </Form.Group>

              {showSeleccionEmpresa()}
              {showSeleccionLocal()}

              <Button className="d-flex justify-content-center mx-auto mt-4 mb-3 px-3" variant="dark" type="submit">
                Registrarme
              </Button>
              <Button
                className="d-flex justify-content-center mx-auto mt-2 mb-4 px-3"
                variant="light"
                type="submit"
                size="sm"
                onClick={() => {
                  history.go(-1);
                }}
              >
                Volver
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
