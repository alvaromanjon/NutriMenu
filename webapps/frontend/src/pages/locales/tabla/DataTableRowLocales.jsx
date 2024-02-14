import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DataTableRowLocales = ({ data, onDelete }) => {
  const navigate = useNavigate();

  return (
    <>
      <tr>
        <td>{data.nombre}</td>
        <td>{data.email}</td>
        <td>{data.direccion}</td>
        <td>{data.telefono}</td>
        <td>{data.empresa.nombre}</td>
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

export default DataTableRowLocales;
