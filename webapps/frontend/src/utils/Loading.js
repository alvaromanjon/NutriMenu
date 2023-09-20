import { Spinner, Container } from 'react-bootstrap'

const Loading = () => {
  return (
    <Container className="m-3">
      <Spinner animation="grow" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </Container>

  );
}

export default Loading;