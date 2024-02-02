import { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewAlimentoCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    grupoAlimenticio: "Lácteos",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/alimentos/new/createComponents", { state: { formData } });
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
                className="form-control"
                name="nombre"
                id="nombreAlimento"
                type="text"
                placeholder="Lentejas"
                value={formData.nombre}
                onChange={handleFormChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="grupoAlimenticio" className="form-label">
                Grupo alimenticio
              </label>
              <select
                name="grupoAlimenticio"
                id="grupoAlimenticio"
                className="form-select"
                value={formData.grupoAlimenticio}
                onChange={handleFormChange}
              >
                <option>Lácteos</option>
                <option>Alimentos proteicos</option>
                <option>Fruta</option>
                <option>Verduras</option>
                <option>Cereales</option>
                <option>Grasas</option>
                <option>Legumbres</option>
                <option>Combinación de alimentos</option>
                <option>No aplica</option>
              </select>
            </div>
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
