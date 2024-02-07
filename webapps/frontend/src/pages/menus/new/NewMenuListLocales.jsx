import { Card, Form, Table } from "react-bootstrap";
import DataTableHeader from "../../../utils/DataTableHeader";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { usePlatosLocalesMenu } from "../../../store/platosLocalesMenu";

const NewMenuListLocales = () => {
  const { usuario } = useContext(UserContext);
  const valores = ["Nombre"];
  const [listaLocales, setListaLocales] = useState([]);
  const [addLocal, removeLocal] = usePlatosLocalesMenu((state) => [state.addLocal, state.removeLocal]);

  useEffect(() => {
    fetch(`http://localhost:8080/locales?id_empresa=${usuario.empresa.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setListaLocales(data);
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
        <Card.Title className="text-center">Lista de locales</Card.Title>
        <Card.Subtitle className="text-center text-muted">Selecciona en cuáles se va a añadir tu menú</Card.Subtitle>
      </Card.Header>
      <Card.Body className="p-4">
        <Table responsive>
          <thead>
            <tr>
              <DataTableHeader valores={valores} />
            </tr>
          </thead>
          <tbody>
            {listaLocales &&
              listaLocales.map &&
              listaLocales.map((local) => (
                <NewItemOnListLocales key={local.id} data={local} addAction={addLocal} removeAction={removeLocal} />
              ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

const NewItemOnListLocales = ({ data, addAction, removeAction }) => {
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
      <td style={{ verticalAlign: "middle" }}>
        <Form>
          <Form.Check
            type="checkbox"
            name="locales"
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

export default NewMenuListLocales;
