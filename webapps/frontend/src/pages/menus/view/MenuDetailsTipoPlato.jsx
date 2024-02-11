import { Card } from "react-bootstrap";
import MenuItem from "./MenuItem";

const MenuDetailsTipoPlato = ({ title, data, platoEscogido, setPlatoEscogido }) => {
  const handleChange = (obj) => {
    if (platoEscogido.id === obj.id) {
      setPlatoEscogido({ alimentos: [{}] });
    } else {
      setPlatoEscogido(obj);
    }
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
                checked={platoEscogido.id === plato.id}
                onChange={() => handleChange(plato)}
              />
            ))
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MenuDetailsTipoPlato;
