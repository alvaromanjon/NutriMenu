import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NewAlimentoElements = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Nombre del alimento</Form.Label>
        <Form.Control type="text" placeholder="Lentejas" required="true" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Grupo alimenticio</Form.Label>
        <Form.Select required="true">
          <option>Lácteos</option>
          <option>Alimentos proteicos</option>
          <option>Fruta</option>
          <option>Verduras</option>
          <option>Cereales</option>
          <option>Grasas</option>
          <option>Legumbres</option>
          <option>Combinación de alimentos</option>
          <option>No aplica</option>
        </Form.Select>
      </Form.Group>
    </>
  );
};

const NewAlimentoCreate = () => {
  const navigate = useNavigate();
  return (
    <Container fluid="xxl">
      <Row>
        <Col className="col-2"></Col>
        <Col>
          <h1 className="h2 text-center my-4">Crear alimento a mano</h1>
          <Form className="justify-content-md-center">
            {<NewAlimentoElements />}
            <div className="d-grid gap-3 mt-4 col-xl-4 col-xxl-2 mx-auto">
              <Button className="btn-primary" as={Link} to="/alimentos/new/createComponents">
                Continuar
              </Button>
              <Button
                className="btn-secondary"
                onClick={() => {
                  navigate(-2);
                }}
              >
                Volver
              </Button>
            </div>
          </Form>
        </Col>
        <Col className="col-2"></Col>
      </Row>
    </Container>
  );
};

export default NewAlimentoCreate;
