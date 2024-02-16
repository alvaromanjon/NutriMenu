import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";
import NewPlatoAddFromNutritionixList from "./NewPlatoAddFromNutritionixList";
import Loading from "../../../../utils/Loading";

const NewPlatoAddFromNutritionix = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

    setIsLoading(false);
    if (!response.ok) {
      setIsLoading(false);
      setErrorFlag(true);
      setErrorMessage("Se ha producido un error a la hora de obtener la información de Nutritionix");
      return null;
    } else {
      setIsLoading(false);
      setErrorFlag(false);
      return data;
    }
  };

  const handleSearch = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (search !== "") {
      setSearchResults(await searchData());
    } else {
      setIsLoading(false);
      setErrorFlag(true);
      setErrorMessage("Introduce un valor en la barra de búsqueda");
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

      {isLoading && <Loading />}

      {errorFlag && (
        <Alert className="mt-3 mb-1" variant="danger">
          {errorMessage}
        </Alert>
      )}
      {searchResults && <NewPlatoAddFromNutritionixList data={searchResults} />}
    </>
  );
};

export default NewPlatoAddFromNutritionix;
