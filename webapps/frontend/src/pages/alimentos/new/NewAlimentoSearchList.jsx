import { ListGroup, Button, Row, Col } from "react-bootstrap";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import { useState } from "react";
import "./styles.css";

const NewAlimentoSearchList = ({ data }) => {
  const [alimentoEscogido, setAlimentoEscogido] = useState(null);
  const [errorData, setErrorData] = useState();
  const [chosen, setChosen] = useState(null);

  const handleSubmitPost = async (alimento) => {
    try {
      if (!alimento) {
        return;
      }
      fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {
        method: "POST",
        body: JSON.stringify({
          query: `${alimento.food_name}`,
          locale: "es_ES",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-app-id": import.meta.env.VITE_NUTRI_X_APP_ID,
          "x-app-key": import.meta.env.VITE_NUTRI_X_APP_KEY,
          "x-remote-user-id": import.meta.env.VITE_NUTRI_X_REMOTE_USER_ID,
        },
      })
        .then((response) => {
          if (!response.ok) {
            setErrorData(response);
          }
          return response.json();
        })
        .then((data) => {
          setChosen(data);
        });
    } catch (error) {
      console.error("Error desconocido: ", error);
    }
  };

  return (
    <ListGroup>
      {data &&
        data.common.map &&
        data.common.map((result, index) => (
          <ListGroup.Item key={index}>
            <Row className="align-items-center">
              <Col className="col-auto ms-3">
                <img
                  className="list-images img-thumbnail rounded float-left"
                  src={result.photo.thumb}
                  alt={"Imagen de " + capitalizeFirstLetter(result.food_name)}
                />
              </Col>
              <Col className="ms-3">{capitalizeFirstLetter(result.food_name)}</Col>
              <Col className="col-auto me-3">
                <Button
                  variant="primary"
                  onClick={() => {
                    setAlimentoEscogido(data.common[index]);
                    handleSubmitPost(result);
                  }}
                >
                  Añadir
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default NewAlimentoSearchList;
