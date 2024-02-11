import { ListGroup, Button, Row, Col, Alert } from "react-bootstrap";
import capitalizeFirstLetter from "../../../../utils/capitalizeFirstLetter";
import { useEffect, useState } from "react";
import "./styles.css";
import { useAlimentosPlato } from "../../../../store/alimentosPlato";

const NewPlatoAddFromNutritionixList = ({ data }) => {
  const [alimentoEscogido, setAlimentoEscogido] = useState(null);
  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [addAlimento] = useAlimentosPlato((state) => [state.addAlimento]);

  const assignFoodGroup = (foodId) => {
    switch (foodId) {
      case 1:
        return "LACTEOS";
      case 2:
        return "PROTEICOS";
      case 3:
        return "FRUTA";
      case 4:
        return "VERDURAS";
      case 5:
        return "CEREALES";
      case 6:
        return "GRASAS";
      case 7:
        return "LEGUMBRES";
      case 8:
        return "COMBINACION";
      case 9:
        return "NO_APLICA";

      default:
        return "NO_APLICA";
    }
  };

  useEffect(() => {
    const transformData = (alimentoAPI) => {
      let transformedData = {};

      transformedData = {
        nombre: capitalizeFirstLetter(alimentoAPI.foods[0].food_name),
        grupoAlimento: assignFoodGroup(alimentoAPI.foods[0].tags.food_group),
        gramosPorRacion: alimentoAPI.foods[0].serving_weight_grams,
        componentesNutricionales: {
          calorias: alimentoAPI.foods[0].nf_calories,
          grasas: alimentoAPI.foods[0].nf_total_fat,
          grasasSaturadas: alimentoAPI.foods[0].nf_saturated_fat,
          hidratosCarbono: alimentoAPI.foods[0].nf_total_carbohydrate,
          azucares: alimentoAPI.foods[0].nf_sugars,
          fibra: alimentoAPI.foods[0].nf_dietary_fiber,
          proteinas: alimentoAPI.foods[0].nf_protein,
          sal: alimentoAPI.foods[0].nf_sodium / 1000,
          vitaminas: {
            vitaminaA: getValUsingId(alimentoAPI, 320),
            vitaminaD: getValUsingId(alimentoAPI, 328),
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
          setErrorFlag(false);
          const infoAlimento = transformData(data);
          sendData(infoAlimento);
        })
        .catch((error) => {
          setErrorFlag(true);
          setErrorMessage("Se ha producido un error a la hora de obtener la información de Nutritionix");
          console.error(error);
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
        setErrorFlag(false);
        const data = await response.json().then((data) => data);
        const alimentoToList = {
          id: data.id,
          nombre: data.nombre,
          cantidad: data.gramosPorRacion,
        };
        addAlimento(alimentoToList);
      } else {
        setErrorFlag(true);
        setErrorMessage("Ya existe un alimento con ese nombre en la base de datos");
      }
    };

    if (alimentoEscogido !== null) {
      getFullInfo(alimentoEscogido);
    }
  }, [alimentoEscogido, addAlimento]);

  const getValUsingId = (alimentoAPI, id) => {
    const item = alimentoAPI.foods[0].full_nutrients.find((item) => item.attr_id === id);
    return item ? item.value : 0;
  };

  return (
    <>
      {errorFlag && (
        <Alert className="mt-3 mb-1" variant="danger">
          {errorMessage}
        </Alert>
      )}
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
                    }}
                  >
                    Añadir
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
};

export default NewPlatoAddFromNutritionixList;
