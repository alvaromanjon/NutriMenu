import { Form, Row, Col } from "react-bootstrap";
import NewElementLayout from "../../../layouts/NewElementLayout";

const NewLocalElements = () => {
  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del local</Form.Label>
            <Form.Control type="text" placeholder="Pepito Avenida Cantabria"  />
          </Form.Group>
        </Col>
        <Col md="6" xl="4">
          <Form.Group className="mb-3">
            <Form.Label>Empresa a la que pertenece</Form.Label>
            <Form.Select >
              <option>Pepito SL</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="nosotros@empresa.com" />
          </Form.Group>
        </Col>
        <Col md="6" xl="4">
          <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="tel" placeholder="947123456" />
          </Form.Group>
        </Col>
      </Row>

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

const NewLocal = () => {
  return <NewElementLayout title={"Creación de un nuevo local"} formElements={NewLocalElements} />;
};

export default NewLocal;
