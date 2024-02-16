import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const DataTableRowAlimentos = ({ data, onDelete }) => {
  const navigate = useNavigate();

  return (
    <>
      <tr>
        <td>
          <Link to={`/alimentos/${data.id}`} style={{ color: "inherit", textDecoration: "inherit" }}>
            {data.nombre}
          </Link>
        </td>

        <td>{data.grupoAlimento}</td>
        <td>{data.gramosPorRacion}</td>

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

export default DataTableRowAlimentos;
