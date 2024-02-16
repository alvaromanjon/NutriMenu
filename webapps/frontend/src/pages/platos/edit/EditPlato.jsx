import { Alert, Button, Container, Form } from "react-bootstrap";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const EditPlato = () => {
  const navigate = useNavigate();
  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const platoOriginal = useLoaderData();
  const { id } = useParams();

  const [platoData, setPlatoData] = useState(platoOriginal[0]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setPlatoData({ ...platoData, [name]: value });
  };

  const handleNext = async (e) => {
    e.preventDefault();
    sendData();
  };

  const sendData = async () => {
    const requestOptions = {
      method: "PUT",
      body: JSON.stringify({
        nombre: platoData.nombre,
        descripcion: platoData.descripcion,
        tipoPlato: platoData.tipoPlato,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const response = await fetch(`http://localhost:8080/platos?id_plato=${id}`, requestOptions);

    if (response.ok) {
      setErrorFlag(false);
      navigate("/platos");
    } else {
      setErrorFlag(true);
      setErrorMessage("Se ha producido un error a la hora de actualizar el plato");
    }
  };

  return (
    <>
      <Container className="mt-4" fluid="md">
        <h3 className="text-center">Editar un plato</h3>
        <Form className="justify-content-md-center" onSubmit={handleNext}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del plato</Form.Label>
            <Form.Control
              name="nombre"
              type="text"
              placeholder="Un plato"
              value={platoData.nombre}
              onChange={handleFormChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción del plato</Form.Label>
            <Form.Control
              name="descripcion"
              type="text"
              placeholder="Plato riquísimo"
              value={platoData.descripcion}
              onChange={handleFormChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tipo de plato</Form.Label>
            <Form.Select name="tipoPlato" value={platoData.tipoPlato} onChange={handleFormChange}>
              <option value="ENTRANTE">Entrante</option>
              <option value="PRIMER_PLATO">Primer plato</option>
              <option value="SEGUNDO_PLATO">Segundo plato</option>
              <option value="POSTRE">Postre</option>
            </Form.Select>
          </Form.Group>

          {errorFlag && (
            <Alert className="mt-3 mb-1" variant="danger">
              {errorMessage}
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
      </Container>
    </>
  );
};

export default EditPlato;
