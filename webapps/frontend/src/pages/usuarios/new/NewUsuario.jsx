import { Form, Row, Col, Alert } from "react-bootstrap";
import NewElementLayout from "../../../layouts/NewElementLayout";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";

const NewUsuario = () => {
  const empresasData = useLoaderData();
  const [usuarioData, setUsuarioData] = useState({
    nombre: "",
    usuario: "",
    password: "",
    email: "",
    empresa: empresasData[0].id,
    rol: "ADMINISTRADOR",
  });

  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUsuarioData({ ...usuarioData, [name]: value });
  };

  const handleNext = async (e) => {
    e.preventDefault();
    sendData();
  };

  const sendData = async () => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        nombre: usuarioData.nombre,
        usuario: usuarioData.usuario,
        password: usuarioData.password,
        email: usuarioData.email,
        rol: usuarioData.rol,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    let response = null;

    if (usuarioData.rol === "ADMINISTRADOR") {
      response = await fetch("http://localhost:8080/usuarios", requestOptions);
    } else {
      response = await fetch(`http://localhost:8080/usuarios?id_empresa=${usuarioData.empresa}`, requestOptions);
    }

    if (response.ok) {
      setErrorFlag(false);
      navigate("/usuarios");
    } else {
      setErrorFlag(true);
      setErrorMessage(
        "Se ha producido un error al crear el usuario. Revisa que no exista un usuario con el mismo nombre de usuario o email",
      );
    }
  };

  return (
    <NewElementLayout
      title="Creación de un nuevo usuario"
      formElements={NewUsuarioElements}
      selectorData={empresasData}
      formChange={handleFormChange}
      handleSubmit={handleNext}
      backAction={() => navigate("/usuarios")}
      errorFlag={errorFlag}
      errorMessage={errorMessage}
    />
  );
};

const NewUsuarioElements = (selectorData, handleFormChange, errorFlag, errorMessage) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Nombre y apellidos</Form.Label>
        <Form.Control name="nombre" type="text" placeholder="Juan Martínez" onChange={handleFormChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nombre de usuario (*)</Form.Label>
        <Form.Control name="usuario" type="text" placeholder="juanmartinez" onChange={handleFormChange} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contraseña (*)</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Escribe la contraseña deseada"
          onChange={handleFormChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Correo electrónico (*)</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="nosotros@empresa.com"
          onChange={handleFormChange}
          required
        />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Empresa a la que pertenece</Form.Label>
            <Form.Select name="empresa" onChange={handleFormChange}>
              {selectorData.map((empresa) => (
                <option key={empresa.id} value={empresa.id}>
                  {empresa.nombre}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="mb-3">
            <Form.Label>Rol (*)</Form.Label>
            <Form.Select name="rol" onChange={handleFormChange} required>
              <option value="ADMINISTRADOR">Administrador</option>
              <option value="EDITOR">Editor</option>
              <option value="CAMARERO">Camarero</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      {errorFlag && (
        <Alert className="mt-3 mb-1" variant="danger">
          {errorMessage}
        </Alert>
      )}
    </>
  );
};

export default NewUsuario;
