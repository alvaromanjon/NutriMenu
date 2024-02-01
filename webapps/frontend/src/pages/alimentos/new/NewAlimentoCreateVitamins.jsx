import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NewAlimentoVitaminsElements = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Vitamina A</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en microgramos (μg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Vitamina D</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en microgramos (μg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Vitamina E</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Vitamina B9</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en microgramos (μg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Vitamina B3</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Vitamina B2</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Vitamina B1</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Vitamina B12</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en microgramos (μg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Vitamina B6</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Vitamina C</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
      </Form.Group>
    </>
  );
};

const NewAlimentoCreateVitamins = () => {
  const navigate = useNavigate();
  return (
    <Container fluid="xxl">
      <Row>
        <Col className="col-2"></Col>
        <Col>
          <h1 className="h2 text-center my-4">Vitaminas del alimento</h1>
          <Form className="justify-content-md-center">
            {<NewAlimentoVitaminsElements />}
            <div className="d-grid gap-3 mt-4 col-xl-4 col-xxl-2 mx-auto">
              <Button className="btn-primary" as={Link} to="/alimentos/new/createMinerals">
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

export default NewAlimentoCreateVitamins;
