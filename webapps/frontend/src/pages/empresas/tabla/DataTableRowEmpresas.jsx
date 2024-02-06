import { Button } from "react-bootstrap";

const DataTableRowEmpresas = ({ data, onDelete }) => {
  return (
    <>
      <tr>
        <td>{data.cif}</td>
        <td>{data.nombre}</td>
        <td>{data.email}</td>
        <td>{data.direccion}</td>
        <td>{data.telefono}</td>
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

export default DataTableRowEmpresas;
