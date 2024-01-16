import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const NewEmpresa = () => {
  return (
    <Container fluid="xxl">
      <h1 className='h2 text-center my-4'>Creación de una nueva empresa</h1>
      <Form className='justify-content-md-center'>
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
        <div className='d-grid gap-3 mt-4 col-xl-4 col-xxl-2 mx-auto'>
          <Button className="btn-primary btn-lg">
            Guardar
          </Button>
          <Button className="btn-secondary btn-lg">
            Volver
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default NewEmpresa;