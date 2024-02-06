import { Button } from "react-bootstrap";

const DataTableRowUsuarios = ({ data, onDelete }) => {
  return (
    <>
      <tr>
        <td>{data.usuario}</td>
        <td>{data.nombre}</td>
        <td>{data.email}</td>
        <td>{data.rol}</td>
        {data.rol != "ADMINISTRADOR" && <td>{data.empresa.nombre}</td>}
        {data.rol == "ADMINISTRADOR" && <td>-</td>}
        {data.rol != "ADMINISTRADOR" && <td>{data.local.nombre}</td>}
        {data.rol == "ADMINISTRADOR" && <td>-</td>}

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

export default DataTableRowUsuarios;
