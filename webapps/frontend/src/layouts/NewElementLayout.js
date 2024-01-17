import { Container, Form, Row, Col, Button } from "react-bootstrap";

const NewElementLayout = ({ title, formElements }) => {
  return (
    <Container fluid="xxl">
      <Row>
        <Col className="col-2"></Col>
        <Col>
          <h1 className="h2 text-center my-4">{title}</h1>
          <Form className="justify-content-md-center">
            {formElements()}
            <div className="d-grid gap-3 mt-4 col-xl-4 col-xxl-2 mx-auto">
              <Button className="btn-primary">Guardar</Button>
              <Button className="btn-secondary">Volver</Button>
            </div>
          </Form>
        </Col>
        <Col className="col-2"></Col>
      </Row>
    </Container>
  );
};

export default NewElementLayout;
