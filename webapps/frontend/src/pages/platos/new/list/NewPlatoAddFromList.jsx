import { Button, Table } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import DataTableHeader from "../../../../utils/DataTableHeader";
import { useAlimentosPlato } from "../../../../store/alimentosPlato";
import { useEffect } from "react";

const NewPlatoAddFromList = () => {
  const listaAlimentos = useLoaderData();
  const valores = ["Nombre", "Grupo"];
  const [alimentos, addAlimento] = useAlimentosPlato((state) => [state.alimentos, state.addAlimento]);

  useEffect(() => {
    console.log(alimentos);
  }, [alimentos]);

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
                <Button
                  className="mx-1 my-1"
                  variant="success"
                  size="sm"
                  onClick={() => {
                    const alimentoEscogido = {
                      id: alimento.id,
                      nombre: alimento.nombre,
                      cantidad: alimento.gramosPorRacion,
                    };
                    addAlimento(alimentoEscogido);
                  }}
                >
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
