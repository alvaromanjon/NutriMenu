import { Button, Card, Table } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import DataTableHeader from "../../../utils/DataTableHeader";
import { useAlimentosPlato } from "../../../store/alimentosPlato";

const NewPlatoListAlimentos = () => {
  const valores = ["Nombre", "Cantidad"];
  const [alimentos, updateCantidad, removeAlimento] = useAlimentosPlato((state) => [
    state.alimentos,
    state.updateCantidad,
    state.removeAlimento,
  ]);

  return (
    <Card className="mb-4">
      <Card.Header>
        <Card.Title className="text-center">Lista de alimentos</Card.Title>
        <Card.Subtitle className="text-center text-muted">Composición del plato</Card.Subtitle>
      </Card.Header>
      <Card.Body className="p-4">
        <Table responsive>
          <thead>
            <tr>
              <DataTableHeader valores={valores} />
            </tr>
          </thead>
          <tbody>
            {alimentos &&
              alimentos.map &&
              alimentos.map((item) => (
                <ListRowAlimentos
                  key={item.id}
                  data={item}
                  updateFunction={updateCantidad}
                  deleteFunction={removeAlimento}
                />
              ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

const ListRowAlimentos = ({ data, updateFunction, deleteFunction }) => {
  return (
    <>
      <tr>
        <td style={{ verticalAlign: "middle" }}>{data.nombre}</td>
        <td style={{ verticalAlign: "middle" }}>
          <input
            className="form-control"
            type="number"
            min="0"
            step="10"
            placeholder="100"
            value={data.cantidad}
            onChange={(e) => updateFunction(data.id, e.target.value)}
            style={{ maxWidth: "75px" }}
          />
        </td>

        <td style={{ verticalAlign: "middle" }}>
          <Button variant="light" size="sm" onClick={() => deleteFunction(data.id)}>
            <Trash />
          </Button>
        </td>
      </tr>
    </>
  );
};

export default NewPlatoListAlimentos;
