import { Form, Row, Col } from "react-bootstrap";
import NewElementLayout from "../../../layouts/NewElementLayout";

const NewUsuarioElements = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Nombre y apellidos</Form.Label>
        <Form.Control type="text" placeholder="Juan Martínez"  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control type="text" placeholder="juanmartinez"  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Escribe la contraseña deseada"  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="nosotros@empresa.com" />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Empresa a la que pertenece</Form.Label>
            <Form.Select >
              <option>Pepito SL</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="mb-3">
            <Form.Label>Rol</Form.Label>
            <Form.Select >
              <option>Administrador</option>
              <option>Editor</option>
              <option>Camarero</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

const NewUsuario = () => {
  return <NewElementLayout title="Creación de un nuevo usuario" formElements={NewUsuarioElements} />;
};

export default NewUsuario;
