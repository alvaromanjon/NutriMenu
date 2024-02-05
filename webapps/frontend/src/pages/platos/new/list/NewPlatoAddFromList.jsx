import { Button, Table } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import DataTableHeader from "../../../../utils/DataTableHeader";

const NewPlatoAddFromList = () => {
  const listaAlimentos = useLoaderData();
  const valores = ["Nombre", "Grupo"];
  // TODO - hacer que los alimentos se añadan a la lista de alimentos del plato
  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>
          {listaAlimentos.map((alimento) => (
            <tr key={alimento.id}>
              <td style={{ verticalAlign: "middle" }}>{alimento.nombre}</td>
              <td style={{ verticalAlign: "middle" }}>{alimento.grupoAlimento}</td>

              <td style={{ verticalAlign: "middle" }}>
                <Button className="mx-1 my-1" variant="success" size="sm">
                  Añadir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default NewPlatoAddFromList;
