import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";

const HomeSelectLocal = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate(`/${e.target.value}/listaLocales`);
  };

  return (
    <>
      <Container fluid className="position-relative">
        <Row className="justify-content-center align-items-center text-center text-muted" style={{ height: "70vh" }}>
          <Col md={5}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Bienvenido a NutriMenu</h1>
            <p style={{ fontSize: "1.5rem" }}>Por favor, selecciona un local de la lista</p>
          </Col>
          <Col className="col-md-auto"></Col>

          <Col md={5}>
            <Form onClick={handleNext}>
              {data.map((item) => (
                <div className="d-grid gap-2" key={item.id}>
                  <Button variant="outline-dark" size="lg" className="mb-3" value={item.id} type="submit">
                    {item.nombre}
                  </Button>
                </div>
              ))}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeSelectLocal;
