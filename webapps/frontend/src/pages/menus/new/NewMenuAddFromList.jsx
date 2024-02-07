import { Button, Card, Table } from "react-bootstrap";
import DataTableHeader from "../../../utils/DataTableHeader";

const NewMenuAddFromList = () => {
  const valores = ["Nombre", "Tipo de plato"];
  const listaPlatos = [];
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
              listaPlatos.map((local) => (
                <tr key={local.id}>
                  <td style={{ verticalAlign: "middle" }}>{local.nombre}</td>
                  <td style={{ verticalAlign: "middle" }}>{local.tipoPlato}</td>
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

export default NewMenuAddFromList;
