import { Form, Alert } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import EditElementLayout from "../../../layouts/EditElementLayout";

const EditUsuario = () => {
  const usuarioOriginal = useLoaderData();
  const [usuarioData, setUsuarioData] = useState({
    nombre: usuarioOriginal[0].nombre,
    usuario: usuarioOriginal[0].usuario,
    email: usuarioOriginal[0].email,
    password: usuarioOriginal[0].password,
    oldPassword: "",
    newPassword: "",
  });

  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [cambiaPassword, setCambiaPassword] = useState(false);

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUsuarioData({ ...usuarioData, [name]: value });
    if (name === "oldPassword") {
      if (value !== "") {
        setCambiaPassword(true);
      } else if (usuarioData.newPassword === "") {
        setCambiaPassword(false);
      }
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();
    sendData();
  };

  const sendData = async () => {
    if (cambiaPassword && usuarioData.password !== usuarioData.oldPassword) {
      setErrorFlag(true);
      setErrorMessage("La contraseña antigua no coincide con la contraseña del usuario");
      return;
    }

    if (cambiaPassword && usuarioData.newPassword === "") {
      setErrorFlag(true);
      setErrorMessage("Si cambias la contraseña, debes introducir una nueva contraseña");
      return;
    }

    if (cambiaPassword && usuarioData.newPassword === usuarioData.oldPassword) {
      setErrorFlag(true);
      setErrorMessage("La nueva contraseña no puede ser igual a la antigua");
      return;
    }

    if (cambiaPassword) {
      usuarioData.password = usuarioData.newPassword;
    }

    const requestOptions = {
      method: "PUT",
      body: JSON.stringify({
        nombre: usuarioData.nombre,
        usuario: usuarioData.usuario,
        email: usuarioData.email,
        password: usuarioData.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const response = await fetch(`http://localhost:8080/usuarios?id_usuario=${usuarioOriginal[0].id}`, requestOptions);

    if (response.ok) {
      setErrorFlag(false);
      navigate("/usuarios");
    } else {
      setErrorFlag(true);
      setErrorMessage(
        "Se ha producido un error al editar el usuario. Revisa que no exista un usuario con el mismo nombre de usuario o email",
      );
    }
  };

  return (
    <EditElementLayout
      title="Edición de un usuario"
      formElements={NewUsuarioElements}
      formChange={handleFormChange}
      handleSubmit={handleNext}
      backAction={() => navigate("/usuarios")}
      errorFlag={errorFlag}
      errorMessage={errorMessage}
      values={usuarioData}
    />
  );
};

const NewUsuarioElements = (handleFormChange, errorFlag, errorMessage, values) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Nombre y apellidos</Form.Label>
        <Form.Control
          name="nombre"
          type="text"
          placeholder="Persona inventada"
          value={values.nombre}
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nombre de usuario (*)</Form.Label>
        <Form.Control
          name="usuario"
          type="text"
          placeholder="personainventada"
          value={values.usuario}
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
          value={values.email}
          onChange={handleFormChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contraseña antigua</Form.Label>
        <Form.Control
          name="oldPassword"
          type="password"
          placeholder="Escribe la antigua contraseña"
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contraseña nueva</Form.Label>
        <Form.Control
          name="newPassword"
          type="password"
          placeholder="Escribe la nueva contraseña"
          onChange={handleFormChange}
        />
      </Form.Group>

      {errorFlag && (
        <Alert className="mt-3 mb-1" variant="danger">
          {errorMessage}
        </Alert>
      )}
    </>
  );
};

export default EditUsuario;
