import { useState } from "react";
import { Row, Col, Container, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewAlimentoCreate = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [alimentoData, setAlimentoData] = useState({
    nombre: "",
    grupoAlimento: "LACTEOS",
    componentesNutricionales: null,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAlimentoData({ ...alimentoData, [name]: value });
  };

  const checkData = async () => {
    const response = await fetch(`http://localhost:8080/alimentos?nombre=${alimentoData.nombre}`);
    const data = await response.json();

    if (response.ok) {
      if (data.length !== 0) {
        setError(true);
      } else {
        setError(false);
        navigate("/alimentos/new/createComponents", { state: { alimento: alimentoData } });
        window.scrollTo(0, 0);
      }
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();
    checkData();
  };

  return (
    <Container fluid="xxl">
      <Row>
        <Col className="col-2"></Col>
        <Col>
          <h1 className="h2 text-center my-4">Crear alimento a mano</h1>
          <form className="justify-content-md-center" onSubmit={handleNext}>
            <div className="mb-3">
              <label htmlFor="nombreAlimento" className="form-label">
                Nombre del alimento
              </label>
              <input
                name="nombre"
                className="form-control"
                id="nombreAlimento"
                type="text"
                placeholder="Lentejas"
                onChange={handleFormChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="grupoAlimenticio" className="form-label">
                Grupo alimenticio
              </label>
              <select name="grupoAlimento" id="grupoAlimenticio" className="form-select" onChange={handleFormChange}>
                <option value="LACTEOS">Lácteos</option>
                <option value="PROTEICOS">Alimentos proteicos</option>
                <option value="FRUTA">Fruta</option>
                <option value="VERDURAS">Verduras</option>
                <option value="CEREALES">Cereales</option>
                <option value="GRASAS">Grasas</option>
                <option value="LEGUMBRES">Legumbres</option>
                <option value="COMBINACION">Combinación de alimentos</option>
                <option value="NO_APLICA">No aplica</option>
              </select>
            </div>
            {error && (
              <Alert className="mt-3 mb-1" variant="danger">
                Ya existe un alimento con este nombre
              </Alert>
            )}
            <div className="d-grid gap-3 mt-4 col-xl-4 col-xxl-2 mx-auto">
              <button className="btn btn-primary" type="submit">
                Continuar
              </button>
              <Button
                className="btn-secondary"
                onClick={() => {
                  navigate(-2);
                }}
              >
                Volver
              </Button>
            </div>
          </form>
        </Col>
        <Col className="col-2"></Col>
      </Row>
    </Container>
  );
};

export default NewAlimentoCreate;
