import { Form, Row, Col } from "react-bootstrap";
import NewElementLayout from "../../../layouts/NewElementLayout";

const NewEmpresaElements = () => {
  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de la empresa</Form.Label>
            <Form.Control type="text" placeholder="Pepito SL" required="true" />
          </Form.Group>
        </Col>
        <Col md="6" xl="4">
          <Form.Group className="mb-3">
            <Form.Label>CIF</Form.Label>
            <Form.Control type="text" placeholder="A29268166" required="true" />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="nosotros@empresa.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="tel" placeholder="947123456" />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text" placeholder="Avenida Cantabria 83" />
          </Form.Group>
        </Col>
        <Col md="3" xl="2">
          <Form.Group className="mb-3">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" placeholder="Burgos" />
          </Form.Group>
        </Col>
        <Col md="3" xl="2">
          <Form.Group className="mb-3">
            <Form.Label>Código postal</Form.Label>
            <Form.Control type="text" placeholder="09006" />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

const NewEmpresa = () => {
  return <NewElementLayout title={"Creación de una nueva empresa"} formElements={NewEmpresaElements} />;
};

export default NewEmpresa;
