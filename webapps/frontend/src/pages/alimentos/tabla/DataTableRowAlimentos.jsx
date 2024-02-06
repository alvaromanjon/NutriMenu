import { Button } from "react-bootstrap";

const DataTableRowAlimentos = ({ data, onDelete }) => {
  return (
    <>
      <tr>
        <td>{data.nombre}</td>
        <td>{data.grupoAlimento}</td>
        <td>{data.gramosPorRacion}</td>

        <td>
          <Button className="mx-1 my-1" variant="secondary" size="sm">
            Editar
          </Button>
          <Button className="mx-1 my-1" variant="danger" size="sm" onClick={() => onDelete(data)}>
            Borrar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default DataTableRowAlimentos;
