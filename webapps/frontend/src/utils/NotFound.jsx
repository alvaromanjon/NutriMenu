import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../pages/login/styles.css";

const NotFound = () => {
  return (
    <Container fluid className="position-relative">
      <Row className="justify-content-center align-items-center" style={{ height: "80vh" }}>
        <Col>
          <Card className="text-center shadow-lg pt-5 mx-auto" style={{ maxWidth: "700px", height: "275px" }}>
            <Card.Body>
              <h2 className="px-6">Creo que te has equivocado 🤕</h2>
              <p className="px-6 mt-3">La página a la que acabas de intentar acceder no existe :(</p>
              <Button variant="dark" className="mt-2 mb-3" as={Link} to="/">
                Vuelve a la página de inicio
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
