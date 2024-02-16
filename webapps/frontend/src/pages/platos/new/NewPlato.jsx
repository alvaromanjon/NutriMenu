import { Alert, Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import NewPlatoListAlimentos from "./NewPlatoListAlimentos";
import NewPlatoInformation from "./NewPlatoInformation";
import { useAlimentosPlato } from "../../../store/alimentosPlato";
import { useContext, useState } from "react";
import { WarningActionModal } from "../../../utils/WarningActionModal";
import { UserContext } from "../../../contexts/UserContext";

const NewPlato = () => {
  const resetState = useAlimentosPlato((state) => state.reset);
  const [nombre, descripcion, tipoPlato, alimentos] = useAlimentosPlato((state) => [
    state.nombre,
    state.descripcion,
    state.tipoPlato,
    state.alimentos,
  ]);
  const navigate = useNavigate();
  const { usuario } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const prepareData = () => {
    const data = {
      nombre,
      descripcion,
      tipoPlato,
      alimentos: alimentos.map((alimento) => {
        return { id: alimento.id, cantidad: alimento.cantidad };
      }),
    };
    return data;
  };

  const sendData = async () => {
    const platoData = prepareData();

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(platoData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const response = await fetch(`http://localhost:8080/platos?id_empresa=${usuario.empresa.id}`, requestOptions);

    if (response.ok) {
      setErrorFlag(false);
      resetState();
      navigate("/platos");
    } else {
      setErrorFlag(true);
      setErrorMessage("Se ha producido un error a la hora de guardar el plato");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <h3 className="text-center">Creación de un nuevo plato</h3>

        <Row className="justify-content-center mt-4">
          <Col lg={5}>
            <NewPlatoInformation />
            <NewPlatoListAlimentos />
          </Col>
          <Col lg={7}>
            <Card className="mb-4">
              <Card.Header>
                <div className="d-block d-md-none">
                  <Nav variant="pills flex-column">
                    <Nav.Item className="my-1">
                      <Nav.Link as={NavLink} to="list">
                        Lista de alimentos
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="my-1">
                      <Nav.Link as={NavLink} to="search">
                        Buscar en Nutritionix
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="my-1">
                      <Nav.Link as={NavLink} to="create">
                        Crear a mano
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="d-none d-md-block">
                  <Nav variant="tabs">
                    <Nav.Item className="ms-2">
                      <Nav.Link as={NavLink} to="list">
                        Lista de alimentos
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ms-2">
                      <Nav.Link as={NavLink} to="search">
                        Buscar en Nutritionix
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ms-2">
                      <Nav.Link as={NavLink} to="create">
                        Crear a mano
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Card.Header>
              <Card.Body className="p-4">
                <Outlet />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {errorFlag && (
          <Alert className="mt-3 mb-1" variant="danger">
            {errorMessage}
          </Alert>
        )}
        <div className="d-grid gap-3 mt-4 col-lg-4 col-xxl-3 mx-auto">
          <Button className="btn-primary" type="submit" onClick={sendData}>
            Guardar
          </Button>
          <Button className="btn-danger" onClick={handleShowModal}>
            Cancelar
          </Button>

          <WarningActionModal
            show={showModal}
            handleClose={handleCloseModal}
            title="Cancelar creación del plato"
            message="¿Estás seguro de que quieres cancelar la creación del plato?"
            firstButton="No"
            secondButton="Sí, cancelar"
            action={() => {
              resetState();
              navigate("/platos");
            }}
          />
        </div>
      </Container>
    </>
  );
};

export default NewPlato;
