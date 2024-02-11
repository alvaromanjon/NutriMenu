import { Card, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const GestionLayout = ({ title }) => {
  return (
    <div>
      <Container fluid="md mt-5">
        <Card className="shadow-lg">
          <Card.Header>
            <h3 className="pt-3">{title}</h3>
          </Card.Header>
          <Card.Body className="pt-2 pb-5 px-3">
            <Outlet />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default GestionLayout;
