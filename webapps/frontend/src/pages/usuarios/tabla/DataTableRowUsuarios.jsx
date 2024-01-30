import { Button } from "react-bootstrap";

const DataTableRowUsuarios = ({ data }) => {
  return (
    <>
      {data &&
        data.map &&
        data.map((item) => (
          <tr key={item.id}>
            <td>{item.usuario}</td>
            <td>{item.nombre}</td>
            <td>{item.email}</td>
            <td>{item.rol}</td>
            {item.rol != "ADMINISTRADOR" && <td>{item.empresa.nombre}</td>}
            {item.rol == "ADMINISTRADOR" && <td>-</td>}
            {item.rol != "ADMINISTRADOR" && <td>{item.local.nombre}</td>}
            {item.rol == "ADMINISTRADOR" && <td>-</td>}

            <td>
              <Button className="mx-1 my-1" variant="secondary" size="sm">
                Editar
              </Button>
              <Button className="mx-1 my-1" variant="danger" size="sm">
                Borrar
              </Button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default DataTableRowUsuarios;
