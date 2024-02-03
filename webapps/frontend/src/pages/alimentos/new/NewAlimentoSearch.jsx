import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import { useState } from "react";
import NewAlimentoSearchList from "./NewAlimentoSearchList";

const NewAlimentoSearch = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  const searchData = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-app-id": import.meta.env.VITE_NUTRI_X_APP_ID,
        "x-app-key": import.meta.env.VITE_NUTRI_X_APP_KEY,
        "x-remote-user-id": import.meta.env.VITE_NUTRI_X_REMOTE_USER_ID,
      },
    };

    const response = await fetch(
      `https://trackapi.nutritionix.com/v2/search/instant?query=${search}&locale=es_ES`,
      requestOptions,
    );
    const data = await response.json();

    setLoading(false);
    if (!response.ok) {
      setLoading(false);
      setError(true);
      return null;
    } else {
      setLoading(false);
      setError(false);
      return data;
    }
  };

  const handleSearch = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (search !== "") {
      setSearchResults(await searchData());
    } else {
      setLoading(false);
      setError(true);
      setSearchResults(null);
    }
  };

  return (
    <>
      <Form onSubmit={handleSearch}>
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

      {loading && (
        <Row className="justify-content-center mt-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      )}

      {error && (
        <Alert className="mt-3 mb-1" variant="danger">
          Introduce un valor en la barra de búsqueda{" "}
        </Alert>
      )}
      {searchResults && <NewAlimentoSearchList data={searchResults} />}
    </>
  );
};

export default NewAlimentoSearch;
