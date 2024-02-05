import { Button, Card, Col, Row } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

const NewPlatoListAlimentos = () => {
  return (
    <Card className="mb-4">
      <Card.Header>
        <Card.Title className="text-center">Lista de alimentos</Card.Title>
        <Card.Subtitle className="text-center text-muted">Composición del plato</Card.Subtitle>
      </Card.Header>
      <Card.Body className="p-4">
        <Row className="align-items-center">
          <Col className="d-flex justify-content-start">
            <span>Arroz</span>
          </Col>
          <Col className="d-flex justify-content-center">
            <span>150 g</span>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button className="btn-light">
              <Trash />
            </Button>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="d-flex justify-content-start">
            <span>Berenjenas con tomate</span>
          </Col>
          <Col className="d-flex justify-content-center">
            <span>150 g</span>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button className="btn-light">
              <Trash />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default NewPlatoListAlimentos;
