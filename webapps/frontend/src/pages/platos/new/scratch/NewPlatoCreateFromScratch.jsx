import { useState } from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewPlatoCreateFromScratch = () => {
  const navigate = useNavigate();
  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [alimentoData, setAlimentoData] = useState({
    nombre: "",
    grupoAlimento: "LACTEOS",
    gramosPorRacion: 100,
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
        setErrorFlag(true);
        setErrorMessage("Ya existe un alimento con este nombre");
      } else {
        setErrorFlag(false);
        navigate("/platos/new/create/components", { state: { alimento: alimentoData } });
      }
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();
    if (alimentoData.nombre !== "") {
      setErrorFlag(false);
      checkData();
    } else {
      setErrorFlag(true);
      setErrorMessage("El nombre del alimento no puede quedar vacío");
    }
  };

  return (
    <Container fluid="xxl">
      <Row>
        <Col className="col-2"></Col>
        <Col>
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
                placeholder="Queso"
                onChange={handleFormChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="gramosPorRacion" className="form-label">
                Gramos por ración
              </label>
              <input
                name="gramosPorRacion"
                className="form-control"
                id="gramosPorRacion"
                type="number"
                min="0"
                step="10"
                placeholder="100"
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
            {errorFlag && (
              <Alert className="mt-3 mb-1" variant="danger">
                {errorMessage}
              </Alert>
            )}
            <div className="d-grid gap-3 mt-4 col-xl-4 col-xxl-2 mx-auto">
              <button className="btn btn-primary" type="submit">
                Continuar
              </button>
            </div>
          </form>
        </Col>
        <Col className="col-2"></Col>
      </Row>
    </Container>
  );
};

export default NewPlatoCreateFromScratch;
