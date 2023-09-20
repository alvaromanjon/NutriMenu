import { Button } from "react-bootstrap"

const DataTableRowLocales = ({ data }) => {
  return (
    <>
      {data && data.map && data.map((item) => (
        <tr key={item.id}>
          <td>{item.nombre}</td>
          <td>{item.email}</td>
          <td>{item.direccion}</td>
          <td>{item.telefono}</td>
          <td>{item.empresa.nombre}</td>
          <td>
            <Button className="mx-1 my-1" variant="secondary" size="sm">Editar</Button>
            <Button className="mx-1 my-1" variant="danger" size="sm">Borrar</Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default DataTableRowLocales;
