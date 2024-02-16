import { useState } from "react";
import { Row, Col, Container, Button, Alert } from "react-bootstrap";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const EditAlimento = () => {
  const { id } = useParams();
  const alimentoOriginal = useLoaderData();
  const navigate = useNavigate();
  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [alimentoData, setAlimentoData] = useState({
    nombre: alimentoOriginal[0].nombre,
    grupoAlimento: alimentoOriginal[0].grupoAlimento,
    gramosPorRacion: alimentoOriginal[0].gramosPorRacion,
    componentesNutricionales: alimentoOriginal[0].componentesNutricionales,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAlimentoData({ ...alimentoData, [name]: value });
  };

  const handleNext = async (e) => {
    e.preventDefault();
    if (alimentoData.nombre !== "") {
      setErrorFlag(false);
      navigate(`/alimentos/${id}/edit/components`, { state: { alimento: alimentoData } });
      window.scrollTo(0, 0);
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
          <h1 className="h2 text-center my-4">Editar alimento</h1>
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
                value={alimentoData.nombre}
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
                placeholder="100"
                step="any"
                value={alimentoData.gramosPorRacion}
                onChange={handleFormChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="grupoAlimenticio" className="form-label">
                Grupo alimenticio
              </label>
              <select
                name="grupoAlimento"
                id="grupoAlimenticio"
                className="form-select"
                value={alimentoData.grupoAlimento}
                onChange={handleFormChange}
              >
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
              <Button
                className="btn-secondary"
                onClick={() => {
                  navigate("/alimentos");
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

export default EditAlimento;
