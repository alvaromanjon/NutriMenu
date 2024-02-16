import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DataTableRowUsuarios = ({ data, onDelete }) => {
  const navigate = useNavigate();
  return (
    <>
      <tr>
        <td>{data.usuario}</td>
        <td>{data.nombre}</td>
        <td>{data.email}</td>
        <td>{data.rol}</td>
        {data.rol != "ADMINISTRADOR" && <td>{data.empresa.nombre}</td>}
        {data.rol == "ADMINISTRADOR" && <td>-</td>}

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

export default DataTableRowUsuarios;
