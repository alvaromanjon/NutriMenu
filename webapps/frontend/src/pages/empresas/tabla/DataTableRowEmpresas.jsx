import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DataTableRowEmpresas = ({ data, onDelete }) => {
  const navigate = useNavigate();
  return (
    <>
      <tr>
        <td>{data.cif}</td>
        <td>{data.nombre}</td>
        <td>{data.email}</td>
        <td>{data.direccion}</td>
        <td>{data.telefono}</td>
        <td>
          <Button className="mx-1 my-1" variant="secondary" size="sm" onClick={() => navigate(`${data.id}/edit`)}>
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
