import { Form, Row, Col, Alert } from "react-bootstrap";
import NewElementLayout from "../../../layouts/NewElementLayout";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";

const NewLocal = () => {
  const empresasData = useLoaderData();
  const [localData, setLocalData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
    telefono: "",
    empresa: empresasData[0].id,
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
      method: "POST",
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
    const response = await fetch(`http://localhost:8080/locales?id_empresa=${localData.empresa}`, requestOptions);

    if (response.ok) {
      setErrorFlag(false);
      navigate("/locales");
    } else {
      setErrorFlag(true);
      setErrorMessage(
        "Se ha producido un error al crear el local. Revisa que no exista un local con el mismo nombre, email o teléfono",
      );
    }
  };

  return (
    <NewElementLayout
      title={"Creación de un nuevo local"}
      formElements={NewLocalElements}
      selectorData={empresasData}
      formChange={handleFormChange}
      handleSubmit={handleNext}
      backAction={() => navigate("/locales")}
      errorFlag={errorFlag}
      errorMessage={errorMessage}
    />
  );
};

const NewLocalElements = (handleFormChange, errorFlag, errorMessage, selectorData) => {
  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del local (*)</Form.Label>
            <Form.Control name="nombre" type="text" placeholder="Local Falso" onChange={handleFormChange} required />
          </Form.Group>
        </Col>
        <Col xxl="4">
          <Form.Group className="mb-3">
            <Form.Label>Empresa a la que pertenece (*)</Form.Label>
            <Form.Select name="empresa" onChange={handleFormChange}>
              {selectorData.map((empresa) => (
                <option key={empresa.id} value={empresa.id}>
                  {empresa.nombre}
                </option>
              ))}
            </Form.Select>
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
              onChange={handleFormChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md="6" xl="4">
          <Form.Group className="mb-3">
            <Form.Label>Teléfono (*)</Form.Label>
            <Form.Control name="telefono" type="tel" placeholder="947123456" onChange={handleFormChange} required />
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
              onChange={handleFormChange}
              required
            />
          </Form.Group>
        </Col>
        <Col lg="2">
          <Form.Group className="mb-3">
            <Form.Label>Ciudad (*)</Form.Label>
            <Form.Control name="ciudad" type="text" placeholder="Atlántida" onChange={handleFormChange} required />
          </Form.Group>
        </Col>
        <Col lg="3">
          <Form.Group className="mb-3">
            <Form.Label>Código postal (*)</Form.Label>
            <Form.Control name="codigoPostal" type="number" placeholder="12345" onChange={handleFormChange} required />
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

export default NewLocal;
