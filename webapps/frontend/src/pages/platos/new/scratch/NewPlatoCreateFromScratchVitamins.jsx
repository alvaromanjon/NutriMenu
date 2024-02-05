import { useEffect, useRef, useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const NewPlatoCreateFromScratchVitamins = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const firstInput = useRef(null);
  const alimentoData = location.state.alimento || {};
  const componentesData = location.state.componentes || {};
  const [vitaminasData, setVitaminasData] = useState({
    vitaminaA: 0,
    vitaminaD: 0,
    vitaminaE: 0,
    vitaminaB9: 0,
    vitaminaB3: 0,
    vitaminaB2: 0,
    vitaminaB1: 0,
    vitaminaB12: 0,
    vitaminaB6: 0,
    vitaminaC: 0,
  });

  useEffect(() => {
    firstInput.current.focus();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setVitaminasData({ ...vitaminasData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/platos/new/create/minerals", {
      state: { alimento: alimentoData, componentes: componentesData, vitaminas: vitaminasData },
    });
    window.scrollTo(0, 0);
  };

  return (
    <Container fluid="xxl">
      <Row>
        <Col className="col-2"></Col>
        <Col>
          <h1 className="h2 text-center my-4">Vitaminas del alimento</h1>
          <Form className="justify-content-md-center" onSubmit={handleNext}>
            <Form.Group className="mb-3">
              <Form.Label>Vitamina A</Form.Label>
              <Form.Control
                ref={firstInput}
                name="vitaminaA"
                type="number"
                placeholder="0"
                onChange={handleFormChange}
              />
              <Form.Text className="text-muted">Se mide en microgramos (μg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vitamina D</Form.Label>
              <Form.Control name="vitaminaD" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en microgramos (μg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vitamina E</Form.Label>
              <Form.Control name="vitaminaE" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vitamina B9</Form.Label>
              <Form.Control name="vitaminaB9" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en microgramos (μg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vitamina B3</Form.Label>
              <Form.Control name="vitaminaB3" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vitamina B2</Form.Label>
              <Form.Control name="vitaminaB2" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vitamina B1</Form.Label>
              <Form.Control name="vitaminaB1" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vitamina B12</Form.Label>
              <Form.Control name="vitaminaB12" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en microgramos (μg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vitamina B6</Form.Label>
              <Form.Control name="vitaminaB6" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vitamina C</Form.Label>
              <Form.Control name="vitaminaC" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
            </Form.Group>
            <div className="d-grid gap-3 mt-4 col-xl-4 col-xxl-2 mx-auto">
              <Button className="btn-primary" type="submit">
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

export default NewPlatoCreateFromScratchVitamins;
