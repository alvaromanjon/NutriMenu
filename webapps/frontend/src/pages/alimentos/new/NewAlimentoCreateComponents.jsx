import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NewAlimentoComponentsElements = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Calorías</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en kilocalorías (kcal)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Grasas</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en gramos (g)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Grasas saturadas</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en gramos (g)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Hidratos de carbono</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en gramos (g)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Azúcares</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en gramos (g)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Fibra</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en gramos (g)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Proteínas</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en gramos (g)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Sal</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en gramos (g)</Form.Text>
      </Form.Group>
    </>
  );
};

const NewAlimentoCreateComponents = () => {
  const navigate = useNavigate();
  return (
    <Container fluid="xxl">
      <Row>
        <Col className="col-2"></Col>
        <Col>
          <h1 className="h2 text-center my-4">Componentes nutricionales del alimento</h1>
          <Form className="justify-content-md-center">
            {<NewAlimentoComponentsElements />}
            <div className="d-grid gap-3 mt-4 col-xl-4 col-xxl-2 mx-auto">
              <Button className="btn-primary" as={Link} to="/alimentos/new/createVitamins">
                Continuar
              </Button>
              <Button
                className="btn-secondary"
                onClick={() => {
                  navigate(-1);
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

export default NewAlimentoCreateComponents;
