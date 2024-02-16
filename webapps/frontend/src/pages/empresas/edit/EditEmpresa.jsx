import { Form, Row, Col, Alert } from "react-bootstrap";
import EditElementLayout from "../../../layouts/EditElementLayout";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditEmpresa = () => {
  const empresaOriginal = useLoaderData();
  const [empresaData, setEmpresaData] = useState({
    nombre: empresaOriginal[0].nombre,
    cif: empresaOriginal[0].cif,
    email: empresaOriginal[0].email,
    telefono: empresaOriginal[0].telefono,
    direccion: empresaOriginal[0].direccion,
    ciudad: empresaOriginal[0].ciudad,
    codigoPostal: empresaOriginal[0].codigoPostal,
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
      method: "PUT",
      body: JSON.stringify(empresaData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const response = await fetch(`http://localhost:8080/empresas?id_empresa=${empresaOriginal[0].id}`, requestOptions);

    if (response.ok) {
      setErrorFlag(false);
      navigate("/empresas");
    } else {
      setErrorFlag(true);
      setErrorMessage(
        "Se ha producido un error al editar la empresa. Revisa que no exista una empresa con el mismo nombre o CIF",
      );
    }
  };

  return (
    <EditElementLayout
      title={"Edición de una empresa"}
      formElements={NewEmpresaElements}
      formChange={handleFormChange}
      handleSubmit={handleNext}
      backAction={() => navigate("/empresas")}
      errorFlag={errorFlag}
      errorMessage={errorMessage}
      values={empresaData}
    />
  );
};

const NewEmpresaElements = (handleFormChange, errorFlag, errorMessage, values) => {
  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de la empresa (*)</Form.Label>
            <Form.Control
              name="nombre"
              type="text"
              placeholder="Empresa ficticia SL"
              value={values.nombre}
              onChange={handleFormChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md="6" xl="4">
          <Form.Group className="mb-3">
            <Form.Label>CIF (*)</Form.Label>
            <Form.Control
              name="cif"
              type="text"
              placeholder="123456"
              value={values.cif}
              onChange={handleFormChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="nosotros@empresa.com"
          value={values.email}
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          name="telefono"
          type="tel"
          placeholder="947123456"
          value={values.telefono}
          onChange={handleFormChange}
        />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              name="direccion"
              type="text"
              placeholder="Avenida Falsa 123"
              value={values.direccion}
              onChange={handleFormChange}
            />
          </Form.Group>
        </Col>
        <Col lg="2">
          <Form.Group className="mb-3">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              name="ciudad"
              type="text"
              placeholder="Atlántida"
              value={values.ciudad}
              onChange={handleFormChange}
            />
          </Form.Group>
        </Col>
        <Col lg="3">
          <Form.Group className="mb-3">
            <Form.Label>Código postal</Form.Label>
            <Form.Control
              name="codigoPostal"
              type="number"
              placeholder="12345"
              value={values.codigoPostal}
              onChange={handleFormChange}
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

export default EditEmpresa;
