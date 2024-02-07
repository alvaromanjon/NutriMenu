import { Button, Card, Table } from "react-bootstrap";
import DataTableHeader from "../../../utils/DataTableHeader";

const NewMenuListLocales = () => {
  const valores = ["Nombre"];
  const listaLocales = [];
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
                <tr key={local.id}>
                  <td style={{ verticalAlign: "middle" }}>{local.nombre}</td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Button className="mx-1 my-1" variant="success" size="sm">
                      Añadir
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default NewMenuListLocales;
