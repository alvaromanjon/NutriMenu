import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="d-flex flex-column justify-content-center align-items-center py-4 shadow-lg"
        style={{ width: "600px", height: "250px" }}
      >
        <Card.Body>
          <h2 className="px-6">Creo que te has equivocado 🤕</h2>
          <p className="px-6 mt-3">La página a la que acabas de intentar acceder no existe :(</p>
          <Button className="mt-2 mb-3" as={Link} to="/">
            Vuelve a la página de inicio
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NotFound;
