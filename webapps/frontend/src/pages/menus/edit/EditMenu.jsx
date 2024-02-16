import { Alert, Button, Container, Form } from "react-bootstrap";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const EditMenu = () => {
  const navigate = useNavigate();
  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const menuOriginal = useLoaderData();
  const { id } = useParams();

  const [menuData, setMenuData] = useState(menuOriginal[0]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setMenuData({ ...menuData, [name]: value });
  };

  const handleNext = async (e) => {
    e.preventDefault();
    sendData();
  };

  const sendData = async () => {
    const requestOptions = {
      method: "PUT",
      body: JSON.stringify({
        nombre: menuData.nombre,
        descripcion: menuData.descripcion,
        fechaPublicacion: menuData.fechaPublicacion,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const response = await fetch(`http://localhost:8080/menus?id_menu=${id}`, requestOptions);

    if (response.ok) {
      setErrorFlag(false);
      navigate("/menus");
    } else {
      setErrorFlag(true);
      setErrorMessage("Se ha producido un error a la hora de actualizar el menú");
    }
  };

  return (
    <>
      <Container className="mt-4" fluid="md">
        <h3 className="text-center">Editar un menú</h3>
        <Form className="justify-content-md-center" onSubmit={handleNext}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del menú</Form.Label>
            <Form.Control
              name="nombre"
              type="text"
              placeholder="Menú de un día"
              value={menuData.nombre}
              onChange={handleFormChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción del menú</Form.Label>
            <Form.Control
              name="descripcion"
              type="text"
              placeholder="Este es el menú de un día"
              value={menuData.descripcion}
              onChange={handleFormChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha de publicación del menú</Form.Label>
            <Form.Control
              name="fechaPublicacion"
              type="date"
              value={menuData.fechaPublicacion}
              onChange={handleFormChange}
            />
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

export default EditMenu;
