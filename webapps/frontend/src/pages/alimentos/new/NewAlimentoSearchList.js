import { ListGroup, Button } from "react-bootstrap";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

const NewAlimentoSearchList = ({ data }) => {
  return (
    <ListGroup>
      {data && data.common.map && data.common.map(result => (
        <ListGroup.Item key={result.tag_id} className="mt-3 d-flex justify-content-between align-items-center">
          {capitalizeFirstLetter(result.food_name)}
          <Button variant="info">Añadir</Button>
        </ListGroup.Item>

      ))}
    </ListGroup>
  );
}

export default NewAlimentoSearchList;