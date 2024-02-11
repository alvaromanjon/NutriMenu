import { Card } from "react-bootstrap";

const MenuItem = ({ item, checked, onChange }) => {
  const cardStyle = checked
    ? { borderColor: "#007bff" }
    : { cursor: "pointer", transition: "border-color 0.2s ease-in-out" };
  return (
    <>
      <Card className="my-3" style={cardStyle} onClick={onChange}>
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>{item.descripcion}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MenuItem;
