import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { WarningActionModal } from "../../../utils/WarningActionModal";
import NewMenuInformation from "./NewMenuInformation";
import NewMenuListLocales from "./NewMenuListLocales";
import NewMenuAddFromList from "./NewMenuAddFromList";
import { usePlatosLocalesMenu } from "../../../store/platosLocalesMenu";
import { UserContext } from "../../../contexts/UserContext";

const NewMenu = () => {
  const resetState = usePlatosLocalesMenu((state) => state.reset);
  const [nombre, descripcion, fechaPublicacion, locales, platos] = usePlatosLocalesMenu((state) => [
    state.nombre,
    state.descripcion,
    state.fechaPublicacion,
    state.locales,
    state.platos,
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
      fechaPublicacion,
      locales: locales.map((local) => {
        return { id: local.id };
      }),
      platos: platos.map((plato) => {
        return { id: plato.id };
      }),
    };
    return data;
  };

  const sendData = async () => {
    const menuData = prepareData();

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(menuData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const response = await fetch(`http://localhost:8080/menus?id_empresa=${usuario.empresa.id}`, requestOptions);

    if (response.ok) {
      setErrorFlag(false);
      resetState();
      navigate("/menus");
    } else {
      setErrorFlag(true);
      setErrorMessage("Se ha producido un error a la hora de guardar el menú");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <h3 className="text-center">Creación de un nuevo menú</h3>

        <Row className="justify-content-center mt-4">
          <Col lg={5}>
            <NewMenuInformation />
          </Col>
          <Col lg={7}>
            <NewMenuListLocales />
            <NewMenuAddFromList />
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
            title="Cancelar creación del menú"
            message="¿Estás seguro de que quieres cancelar la creación del menú?"
            firstButton="No"
            secondButton="Sí, cancelar"
            action={() => {
              resetState();
              navigate("/menus");
            }}
          />
        </div>
      </Container>
    </>
  );
};

export default NewMenu;
