import { Spinner, Container, Row } from "react-bootstrap";

const Loading = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </Row>
    </Container>
  );
};

export default Loading;
