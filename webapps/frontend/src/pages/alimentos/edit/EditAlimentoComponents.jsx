import { useEffect, useRef, useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const EditAlimentoComponents = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const firstInput = useRef(null);
  const alimentoData = location.state.alimento || {};
  const [componentesData, setComponentesData] = useState(alimentoData.componentesNutricionales);

  useEffect(() => {
    firstInput.current.focus();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setComponentesData({ ...componentesData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate(`/alimentos/${id}/edit/vitamins`, { state: { alimento: alimentoData, componentes: componentesData } });
    window.scrollTo(0, 0);
  };

  return (
    <Container fluid="xxl">
      <Row>
        <Col className="col-2"></Col>
        <Col>
          <h1 className="h2 text-center my-4">Componentes nutricionales del alimento</h1>
          <Form className="justify-content-md-center" onSubmit={handleNext}>
            <Form.Group className="mb-3">
              <Form.Label>Calorías</Form.Label>
              <Form.Control
                ref={firstInput}
                name="calorias"
                type="number"
                step="any"
                placeholder="0"
                min="0"
                value={componentesData.calorias}
                onChange={handleFormChange}
              />
              <Form.Text className="text-muted">Se mide en kilocalorías (kcal)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Grasas</Form.Label>
              <Form.Control
                name="grasas"
                type="number"
                step="any"
                placeholder="0"
                value={componentesData.grasas}
                onChange={handleFormChange}
              />
              <Form.Text className="text-muted">Se mide en gramos (g)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Grasas saturadas</Form.Label>
              <Form.Control
                name="grasasSaturadas"
                type="number"
                step="any"
                min="0"
                placeholder="0"
                value={componentesData.grasasSaturadas}
                onChange={handleFormChange}
              />
              <Form.Text className="text-muted">Se mide en gramos (g)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hidratos de carbono</Form.Label>
              <Form.Control
                name="hidratosCarbono"
                type="number"
                step="any"
                min="0"
                placeholder="0"
                value={componentesData.hidratosCarbono}
                onChange={handleFormChange}
              />
              <Form.Text className="text-muted">Se mide en gramos (g)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Azúcares</Form.Label>
              <Form.Control
                name="azucares"
                type="number"
                step="any"
                min="0"
                placeholder="0"
                value={componentesData.azucares}
                onChange={handleFormChange}
              />
              <Form.Text className="text-muted">Se mide en gramos (g)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fibra</Form.Label>
              <Form.Control
                name="fibra"
                type="number"
                step="any"
                min="0"
                placeholder="0"
                value={componentesData.fibra}
                onChange={handleFormChange}
              />
              <Form.Text className="text-muted">Se mide en gramos (g)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Proteínas</Form.Label>
              <Form.Control
                name="proteinas"
                type="number"
                step="any"
                min="0"
                placeholder="0"
                value={componentesData.proteinas}
                onChange={handleFormChange}
              />
              <Form.Text className="text-muted">Se mide en gramos (g)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sal</Form.Label>
              <Form.Control
                name="sal"
                type="number"
                step="any"
                min="0"
                placeholder="0"
                value={componentesData.proteinas}
                onChange={handleFormChange}
              />
              <Form.Text className="text-muted">Se mide en gramos (g)</Form.Text>
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

export default EditAlimentoComponents;
