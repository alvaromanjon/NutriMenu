import { useEffect, useRef, useState } from "react";
import { Form, Row, Col, Container, Button, Alert } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const NewAlimentoCreateMinerals = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const firstInput = useRef(null);
  const [error, setError] = useState(false);
  const alimentoData = location.state.alimento || {};
  const componentesData = location.state.componentes || {};
  const vitaminasData = location.state.vitaminas || {};
  const [mineralesData, setMineralesData] = useState({
    calcio: 0,
    hierro: 0,
    potasio: 0,
    magnesio: 0,
    sodio: 0,
    fosforo: 0,
    selenio: 0,
    zinc: 0,
  });

  useEffect(() => {
    firstInput.current.focus();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setMineralesData({ ...mineralesData, [name]: value });
  };

  const transformData = () => {
    componentesData.vitaminas = vitaminasData;
    componentesData.minerales = mineralesData;
    alimentoData.componentesNutricionales = componentesData;
  };

  const sendData = async () => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(alimentoData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const response = await fetch("http://localhost:8080/alimentos", requestOptions);

    if (response.ok) {
      setError(false);
      navigate("/alimentos/table");
    } else {
      setError(true);
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();
    transformData();
    sendData();
  };

  return (
    <Container fluid="xxl">
      <Row>
        <Col className="col-2"></Col>
        <Col>
          <h1 className="h2 text-center my-4">Minerales del alimento</h1>
          <Form className="justify-content-md-center" onSubmit={handleNext}>
            <Form.Group className="mb-3">
              <Form.Label>Calcio</Form.Label>
              <Form.Control ref={firstInput} name="calcio" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hierro</Form.Label>
              <Form.Control name="hierro" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Potasio</Form.Label>
              <Form.Control name="potasio" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Magnesio</Form.Label>
              <Form.Control name="magnesio" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sodio</Form.Label>
              <Form.Control name="sodio" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fósforo</Form.Label>
              <Form.Control name="fosforo" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Selenio</Form.Label>
              <Form.Control name="selenio" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en microgramos (μg)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Zinc</Form.Label>
              <Form.Control name="zinc" type="number" placeholder="0" onChange={handleFormChange} />
              <Form.Text className="text-muted">Se mide en miligramos (mg)</Form.Text>
            </Form.Group>
            {error && (
              <Alert className="mt-3 mb-1" variant="danger">
                Se ha producido un error al procesar la solicitud
              </Alert>
            )}
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

export default NewAlimentoCreateMinerals;
