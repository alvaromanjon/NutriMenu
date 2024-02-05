import { Button, Card, Table } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import DataTableHeader from "../../../utils/DataTableHeader";

const NewPlatoListAlimentos = () => {
  const valores = ["Nombre", "Cantidad"];
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
            <tr>
              <td style={{ verticalAlign: "middle" }}>Arroz</td>
              <td style={{ verticalAlign: "middle" }}>
                <input
                  className="form-control"
                  type="number"
                  min="0"
                  step="10"
                  placeholder="100"
                  style={{ maxWidth: "75px" }}
                />
              </td>

              <td style={{ verticalAlign: "middle" }}>
                <Button variant="light" size="sm">
                  <Trash />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default NewPlatoListAlimentos;
