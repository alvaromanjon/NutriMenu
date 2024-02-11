import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DataTableRowMenus = ({ data, onDelete }) => {
  return (
    <>
      <tr>
        <td>
          <Link to={`/menus/${data.id}`} style={{ color: "inherit", textDecoration: "inherit" }}>
            {data.nombre}
          </Link>
        </td>
        <td>{data.descripcion}</td>
        <td>{data.fechaCreacion}</td>
        <td>{data.fechaPublicacion}</td>

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

export default DataTableRowMenus;
