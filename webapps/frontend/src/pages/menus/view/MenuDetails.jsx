import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import MenuDetailsTipoPlato from "./MenuDetailsTipoPlato";
import { useState } from "react";
import MenuDetailsGraph from "./MenuDetailsGraph";

const MenuDetails = () => {
  const data = useLoaderData();

  const getPlatosEntrante = () => {
    return data[0].platos.filter((plato) => plato.tipoPlato === "ENTRANTE");
  };

  const getPlatosPrimerPlato = () => {
    return data[0].platos.filter((plato) => plato.tipoPlato === "PRIMER_PLATO");
  };

  const getPlatosSegundoPlato = () => {
    return data[0].platos.filter((plato) => plato.tipoPlato === "SEGUNDO_PLATO");
  };

  const getPlatosPostre = () => {
    return data[0].platos.filter((plato) => plato.tipoPlato === "POSTRE");
  };

  const entrantes = getPlatosEntrante();
  const primerosPlatos = getPlatosPrimerPlato();
  const segundosPlatos = getPlatosSegundoPlato();
  const postres = getPlatosPostre();

  const [entranteEscogido, setEntranteEscogido] = useState({
    alimentos: [{}],
  });
  const [primerPlatoEscogido, setPrimerPlatoEscogido] = useState({
    alimentos: [{}],
  });
  const [segundoPlatoEscogido, setSegundoPlatoEscogido] = useState({
    alimentos: [{}],
  });
  const [postreEscogido, setPostreEscogido] = useState({
    alimentos: [{}],
  });

  return (
    <Container fluid="md">
      <Row>
        <Col className="text-center mb-2 mt-3">
          <h3>{data[0].nombre}</h3>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col xl={8} className="align-items-center justify-content-center">
          <MenuDetailsGraph
            entrante={entranteEscogido}
            primerPlato={primerPlatoEscogido}
            segundoPlato={segundoPlatoEscogido}
            postre={postreEscogido}
          />
        </Col>

        <Col xl={4} className="text-center">
          <MenuDetailsTipoPlato
            title="Selecciona un entrante"
            data={entrantes}
            platoEscogido={entranteEscogido}
            setPlatoEscogido={setEntranteEscogido}
          />
          <MenuDetailsTipoPlato
            title="Selecciona un primer plato"
            data={primerosPlatos}
            platoEscogido={primerPlatoEscogido}
            setPlatoEscogido={setPrimerPlatoEscogido}
          />
          <MenuDetailsTipoPlato
            title="Selecciona un segundo plato"
            data={segundosPlatos}
            platoEscogido={segundoPlatoEscogido}
            setPlatoEscogido={setSegundoPlatoEscogido}
          />
          <MenuDetailsTipoPlato
            title="Selecciona un postre"
            data={postres}
            platoEscogido={postreEscogido}
            setPlatoEscogido={setPostreEscogido}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MenuDetails;
