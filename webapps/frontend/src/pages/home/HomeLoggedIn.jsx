import { Col, Container, Row } from "react-bootstrap";
import { ArrowUpCircleFill } from "react-bootstrap-icons";
import "./styles.css";

const HomeLoggedIn = () => {
  return (
    <>
      <Container fluid className="position-relative">
        <Row className="justify-content-center align-items-center text-muted" style={{ height: "80vh" }}>
          <Col xs={12} className="text-center">
            <div className="arrow-bounce">
              <ArrowUpCircleFill />
            </div>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
              Bienvenido al panel de administración de NutriMenu
            </h1>
            <p style={{ fontSize: "1.5rem" }}>
              Selecciona una de las opciones de la barra de navegación para continuar
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeLoggedIn;
