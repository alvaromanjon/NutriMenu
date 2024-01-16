import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const NewUsuario = () => {
  return (
    <Container fluid="xxl">
      <Row>
        <Col className='col-2'></Col>
        <Col>
          <h1 className='h2 text-center my-4'>Creación de un nuevo usuario</h1>
          <Form className='justify-content-md-center'>
            <Form.Group className="mb-3">
              <Form.Label>Nombre y apellidos</Form.Label>
              <Form.Control type="text" placeholder="Juan Martínez" required="true" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control type="text" placeholder="juanmartinez" required="true" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Escribe la contraseña deseada" required="true" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="nosotros@empresa.com" />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Empresa a la que pertenece</Form.Label>
                  <Form.Select required="true">
                    <option>Pepito SL</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="mb-3">
                  <Form.Label>Rol</Form.Label>
                  <Form.Select required="true">
                    <option>Administrador</option>
                    <option>Editor</option>
                    <option>Camarero</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <div className='d-grid gap-3 mt-4 col-xl-4 col-xxl-2 mx-auto'>
              <Button className="btn-primary">
                Guardar
              </Button>
              <Button className="btn-secondary">
                Volver
              </Button>
            </div>
          </Form>
        </Col>
        <Col className='col-2'>
        </Col>
      </Row>

    </Container>
  );
}

export default NewUsuario;