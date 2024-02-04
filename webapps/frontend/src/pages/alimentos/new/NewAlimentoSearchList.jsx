import { ListGroup, Button, Row, Col } from "react-bootstrap";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const NewAlimentoSearchList = ({ data }) => {
  const navigate = useNavigate();
  const [alimentoEscogido, setAlimentoEscogido] = useState(null);
  let infoAlimento = null;
  const [error, setError] = useState(false);

  const transformData = (alimentoAPI) => {
    let transformedData = {};

    transformedData = {
      nombre: capitalizeFirstLetter(alimentoAPI.foods[0].food_name),
      grupoAlimento: "CEREALES", // TODO mapear
      gramosPorRacion: alimentoAPI.foods[0].serving_weight_grams,
      componentesNutricionales: {
        calorias: alimentoAPI.foods[0].nf_calories,
        grasas: alimentoAPI.foods[0].nf_total_fat,
        grasasSaturadas: alimentoAPI.foods[0].nf_saturated_fat,
        hidratosCarbono: alimentoAPI.foods[0].nf_total_carbohydrate,
        azucares: alimentoAPI.foods[0].nf_sugars,
        fibra: alimentoAPI.foods[0].nf_dietary_fiber,
        proteinas: alimentoAPI.foods[0].nf_protein,
        sal: alimentoAPI.foods[0].nf_sodium,
        vitaminas: {
          vitaminaA: getValUsingId(alimentoAPI, 320),
          vitaminaD: getValUsingId(alimentoAPI, 324),
          vitaminaE: getValUsingId(alimentoAPI, 573),
          vitaminaB9: getValUsingId(alimentoAPI, 431),
          vitaminaB3: getValUsingId(alimentoAPI, 406),
          vitaminaB2: getValUsingId(alimentoAPI, 405),
          vitaminaB1: getValUsingId(alimentoAPI, 404),
          vitaminaB12: getValUsingId(alimentoAPI, 418),
          vitaminaB6: getValUsingId(alimentoAPI, 415),
          vitaminaC: getValUsingId(alimentoAPI, 401),
        },
        minerales: {
          calcio: getValUsingId(alimentoAPI, 301),
          hierro: getValUsingId(alimentoAPI, 303),
          potasio: getValUsingId(alimentoAPI, 306),
          magnesio: getValUsingId(alimentoAPI, 304),
          sodio: getValUsingId(alimentoAPI, 307),
          fosforo: getValUsingId(alimentoAPI, 305),
          selenio: getValUsingId(alimentoAPI, 317),
          zinc: getValUsingId(alimentoAPI, 309),
        },
      },
    };

    return transformedData;
  };

  useEffect(() => {
    const getFullInfo = async (alimentoEscogido) => {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          query: `${alimentoEscogido.food_name}`,
          locale: "es_ES",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-app-id": import.meta.env.VITE_NUTRI_X_APP_ID,
          "x-app-key": import.meta.env.VITE_NUTRI_X_APP_KEY,
          "x-remote-user-id": import.meta.env.VITE_NUTRI_X_REMOTE_USER_ID,
        },
      };

      fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          infoAlimento = transformData(data);
          sendData(infoAlimento);
        });
    };

    const sendData = async (alimentoData) => {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(alimentoData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };

      const response = await fetch("http://localhost:8080/alimentos", requestOptions);

      if (response.ok) {
        setError(false);
        navigate("/alimentos/table");
      } else {
        setError(true);
      }
    };

    if (alimentoEscogido !== null) {
      getFullInfo(alimentoEscogido);
    }
  }, [alimentoEscogido]);

  const getValUsingId = (alimentoAPI, id) => {
    const item = alimentoAPI.foods[0].full_nutrients.find((item) => item.attr_id === id);
    return item ? item.value : 0;
  };

  return (
    <ListGroup className="mt-4">
      {data &&
        data.common.map &&
        data.common.map((result, index) => (
          <ListGroup.Item key={index}>
            <Row className="align-items-center">
              <Col className="col-3 col-lg-2">
                <img
                  className="list-images img-thumbnail ms-lg-2"
                  src={result.photo.thumb}
                  alt={"Imagen de " + capitalizeFirstLetter(result.food_name)}
                />
              </Col>
              <Col className="col-5 col-lg-7">
                <span className="ms-lg-5">{capitalizeFirstLetter(result.food_name)}</span>
              </Col>
              <Col className="col-4 col-lg-3 d-flex justify-content-end">
                <Button
                  variant="primary"
                  className="me-lg-3"
                  onClick={() => {
                    setAlimentoEscogido(data.common[index]);
                    //handleSubmitPost(result);
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
