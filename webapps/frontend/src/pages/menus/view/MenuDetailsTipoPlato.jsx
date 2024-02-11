import { Card } from "react-bootstrap";
import MenuItem from "./MenuItem";

const MenuDetailsTipoPlato = ({ title, data, platoEscogido, setPlatoEscogido }) => {
  const handleChange = (id) => {
    setPlatoEscogido(id);
  };

  return (
    <Card className="my-3">
      <Card.Header>
        <h4>{title}</h4>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {data.length === 0 ? (
            <div>No hay platos de este tipo</div>
          ) : (
            data.map((plato) => (
              <MenuItem
                key={plato.id}
                item={plato}
                checked={platoEscogido === plato.id}
                onChange={() => handleChange(plato.id)}
              />
            ))
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MenuDetailsTipoPlato;
