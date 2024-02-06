import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const NewElementLayout = ({ title, formElements, formChange, handleSubmit, backAction, errorFlag, errorMessage }) => {
  return (
    <Container fluid="xxl">
      <Row>
        <Col className="col-2"></Col>
        <Col>
          <h1 className="h2 text-center my-4">{title}</h1>
          <Form className="justify-content-md-center" onSubmit={handleSubmit}>
            {formElements(formChange, errorFlag, errorMessage)}
            <div className="d-grid gap-3 mt-4 col-xl-4 col-xxl-2 mx-auto">
              <Button className="btn-primary" type="submit">
                Guardar
              </Button>
              <Button className="btn-secondary" onClick={backAction}>
                Volver
              </Button>
            </div>
          </Form>
        </Col>
        <Col className="col-2"></Col>
      </Row>
    </Container>
  );
};

export default NewElementLayout;
