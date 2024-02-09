import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "../../utils/Loading";
import SelectableItem from "./SelectableItem";

const HomeNotLoggedIn = () => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/empresas")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((error) => {
        console.error("Ha habido un error obteniendo los datos: ", error);
        setIsPending("false");
      });
  });

  if (isPending) {
    return <Loading />;
  }

  return (
    <>
      <Container fluid className="position-relative">
        <Row className="justify-content-center align-items-center text-center text-muted" style={{ height: "70vh" }}>
          <Col md={5}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Bienvenido a NutriMenu</h1>
            <p style={{ fontSize: "1.5rem" }}>Por favor, selecciona una empresa de la lista</p>
          </Col>
          <Col className="col-md-auto"></Col>

          <Col md={5}>
            {data.map((item) => (
              <SelectableItem text={item.nombre} key={item.id} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeNotLoggedIn;
