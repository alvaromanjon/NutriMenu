import { Card, Form, Table } from "react-bootstrap";
import DataTableHeader from "../../../utils/DataTableHeader";
import { useContext, useEffect, useState } from "react";
import { usePlatosLocalesMenu } from "../../../store/platosLocalesMenu";
import { UserContext } from "../../../contexts/UserContext";

const NewMenuAddFromList = () => {
  const { usuario } = useContext(UserContext);
  const valores = ["Nombre", "Tipo de plato"];
  const [listaPlatos, setListaPlatos] = useState([]);
  const [addPlato, removePlato] = usePlatosLocalesMenu((state) => [state.addPlato, state.removePlato]);

  useEffect(() => {
    fetch(`http://localhost:8080/platos?id_empresa=${usuario.empresa.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setListaPlatos(data);
        //setIsPending(false);
      })
      .catch((error) => {
        console.error("Ha habido un error obteniendo los datos: ", error);
        //setIsPending("false");
      });
  });

  return (
    <Card className="mb-4">
      <Card.Header>
        <Card.Title className="text-center">Lista de platos</Card.Title>
        <Card.Subtitle className="text-center text-muted">Selecciona qué platos quieres añadir a tu menú</Card.Subtitle>
      </Card.Header>
      <Card.Body className="p-4">
        <Table responsive>
          <thead>
            <tr>
              <DataTableHeader valores={valores} />
            </tr>
          </thead>
          <tbody>
            {listaPlatos &&
              listaPlatos.map &&
              listaPlatos.map((plato) => (
                <NewItemOnListPlatos key={plato.id} data={plato} addAction={addPlato} removeAction={removePlato} />
              ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

const NewItemOnListPlatos = ({ data, addAction, removeAction }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (itemId) => {
    setCheckedItems((currentItems) => {
      // Check if the item is already in the array
      const isAlreadyChecked = currentItems.includes(itemId);

      if (isAlreadyChecked) {
        // If it is, remove it (uncheck)
        removeAction(itemId);
        return currentItems.filter((id) => id !== itemId);
      } else {
        // If it's not, add it (check)
        addAction({ id: itemId });
        return [...currentItems, itemId];
      }
    });
  };

  return (
    <tr>
      <td style={{ verticalAlign: "middle" }}>{data.nombre}</td>
      <td style={{ verticalAlign: "middle" }}>{data.tipoPlato}</td>
      <td style={{ verticalAlign: "middle" }}>
        <Form>
          <Form.Check
            type="checkbox"
            name="platos"
            value={data.id}
            id={data.id}
            checked={checkedItems.includes(data.id)}
            onChange={() => handleCheckboxChange(data.id)}
          />
        </Form>
      </td>
    </tr>
  );
};

export default NewMenuAddFromList;
