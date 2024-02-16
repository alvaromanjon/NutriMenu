import { Form, Row, Col, Alert } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import EditElementLayout from "../../../layouts/EditElementLayout";

const EditLocal = () => {
  const localOriginal = useLoaderData();
  const [localData, setLocalData] = useState({
    nombre: localOriginal[0].nombre,
    email: localOriginal[0].email,
    direccion: localOriginal[0].direccion,
    ciudad: localOriginal[0].ciudad,
    codigoPostal: localOriginal[0].codigoPostal,
    telefono: localOriginal[0].telefono,
  });

  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setLocalData({ ...localData, [name]: value });
  };

  const handleNext = async (e) => {
    e.preventDefault();
    sendData();
  };

  const sendData = async () => {
    const requestOptions = {
      method: "PUT",
      body: JSON.stringify({
        nombre: localData.nombre,
        email: localData.email,
        direccion: localData.direccion,
        ciudad: localData.ciudad,
        codigoPostal: localData.codigoPostal,
        telefono: localData.telefono,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(`http://localhost:8080/locales?id_local=${localOriginal[0].id}`, requestOptions);

    if (response.ok) {
      setErrorFlag(false);
      navigate("/locales");
    } else {
      setErrorFlag(true);
      setErrorMessage(
        "Se ha producido un error al editar el local. Revisa que no exista un local con el mismo nombre, email o teléfono",
      );
    }
  };

  return (
    <EditElementLayout
      title={"Edición de un local"}
      formElements={NewLocalElements}
      formChange={handleFormChange}
      handleSubmit={handleNext}
      backAction={() => navigate("/locales")}
      errorFlag={errorFlag}
      errorMessage={errorMessage}
      values={localData}
    />
  );
};

const NewLocalElements = (handleFormChange, errorFlag, errorMessage, values) => {
  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del local (*)</Form.Label>
            <Form.Control
              name="nombre"
              type="text"
              placeholder="Local Falso"
              value={values.nombre}
              onChange={handleFormChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
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
        </Col>
        <Col md="6" xl="4">
          <Form.Group className="mb-3">
            <Form.Label>Teléfono (*)</Form.Label>
            <Form.Control
              name="telefono"
              type="tel"
              placeholder="947123456"
              value={values.telefono}
              onChange={handleFormChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Dirección (*)</Form.Label>
            <Form.Control
              name="direccion"
              type="text"
              placeholder="Avenida Falsa 123"
              value={values.direccion}
              onChange={handleFormChange}
              required
            />
          </Form.Group>
        </Col>
        <Col lg="2">
          <Form.Group className="mb-3">
            <Form.Label>Ciudad (*)</Form.Label>
            <Form.Control
              name="ciudad"
              type="text"
              placeholder="Atlántida"
              value={values.ciudad}
              onChange={handleFormChange}
              required
            />
          </Form.Group>
        </Col>
        <Col lg="3">
          <Form.Group className="mb-3">
            <Form.Label>Código postal (*)</Form.Label>
            <Form.Control
              name="codigoPostal"
              type="number"
              placeholder="12345"
              value={values.codigoPostal}
              onChange={handleFormChange}
              required
            />
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

export default EditLocal;
