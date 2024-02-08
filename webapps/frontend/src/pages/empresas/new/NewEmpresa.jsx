import { Form, Row, Col, Alert } from "react-bootstrap";
import NewElementLayout from "../../../layouts/NewElementLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewEmpresa = () => {
  const [empresaData, setEmpresaData] = useState({
    nombre: "",
    cif: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
  });

  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEmpresaData({ ...empresaData, [name]: value });
  };

  const handleNext = async (e) => {
    e.preventDefault();
    sendData();
  };

  const sendData = async () => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(empresaData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const response = await fetch("http://localhost:8080/empresas", requestOptions);

    if (response.ok) {
      setErrorFlag(false);
      navigate("/empresas");
    } else {
      setErrorFlag(true);
      setErrorMessage(
        "Se ha producido un error al crear la empresa. Revisa que no exista una empresa con el mismo nombre o CIF",
      );
    }
  };

  return (
    <NewElementLayout
      title={"Creación de una nueva empresa"}
      formElements={NewEmpresaElements}
      formChange={handleFormChange}
      handleSubmit={handleNext}
      backAction={() => navigate("/empresas")}
      errorFlag={errorFlag}
      errorMessage={errorMessage}
    />
  );
};

const NewEmpresaElements = (handleFormChange, errorFlag, errorMessage) => {
  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de la empresa (*)</Form.Label>
            <Form.Control name="nombre" type="text" placeholder="Pepito SL" onChange={handleFormChange} required />
          </Form.Group>
        </Col>
        <Col md="6" xl="4">
          <Form.Group className="mb-3">
            <Form.Label>CIF (*)</Form.Label>
            <Form.Control name="cif" type="text" placeholder="A29268166" onChange={handleFormChange} required />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control name="email" type="email" placeholder="nosotros@empresa.com" onChange={handleFormChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control name="telefono" type="tel" placeholder="947123456" onChange={handleFormChange} />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control name="direccion" type="text" placeholder="Avenida Cantabria 83" onChange={handleFormChange} />
          </Form.Group>
        </Col>
        <Col md="3" xl="2">
          <Form.Group className="mb-3">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control name="ciudad" type="text" placeholder="Burgos" onChange={handleFormChange} />
          </Form.Group>
        </Col>
        <Col md="3" xl="2">
          <Form.Group className="mb-3">
            <Form.Label>Código postal</Form.Label>
            <Form.Control name="codigoPostal" type="number" placeholder="09006" onChange={handleFormChange} />
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

export default NewEmpresa;
