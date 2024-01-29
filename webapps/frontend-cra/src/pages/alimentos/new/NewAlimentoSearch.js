import { Form, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import NewAlimentoSearchList from "./NewAlimentoSearchList";

const NewAlimentoSearch = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [errorData, setErrorData] = useState(null);

  // Para obtener la informacion completa

  // Para obtener la informacion completa
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${search}&locale=es_ES`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-app-id": process.env.REACT_APP_NUTRI_X_APP_ID,
        "x-app-key": process.env.REACT_APP_NUTRI_X_APP_KEY,
        "x-remote-user-id": process.env.REACT_APP_NUTRI_X_REMOTE_USER_ID,
      },
    })
      .then((res) => {
        if (!res.ok) {
          setErrorData(res);
        }
        return res.json();
      })
      .then((data) => {
        setSearchResults(data || []);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col>
            <Form.Group className="mb-0" controlId="formSearch">
              <Form.Control
                type="text"
                placeholder="Busca un alimento"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Button type="submit">Buscar</Button>
          </Col>
        </Row>
      </Form>

      {searchResults && <NewAlimentoSearchList data={searchResults} />}
    </>
  );
};

export default NewAlimentoSearch;
