import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewAlimentoMineralsElements = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Calcio</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Hierro</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Potasio</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Magnesio</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Sodio</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Fósforo</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Selenio</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en microgramos (μg)</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Zinc</Form.Label>
        <Form.Control type="number" placeholder="100" required="true" />
        <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
      </Form.Group>
    </>
  );
};

const NewAlimentoCreateMinerals = () => {
  const navigate = useNavigate();
  return (
    <Container fluid="xxl">
      <Row>
        <Col className="col-2"></Col>
        <Col>
          <h1 className="h2 text-center my-4">Minerales del alimento</h1>
          <Form className="justify-content-md-center">
            {<NewAlimentoMineralsElements />}
            <div className="d-grid gap-3 mt-4 col-xl-4 col-xxl-2 mx-auto">
              <Button className="btn-primary">Continuar</Button>
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

export default NewAlimentoCreateMinerals;
