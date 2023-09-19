import { Button } from "react-bootstrap"

const DataTableRowAlimentos = ({ data }) => {
  return (
    <>
      {data && data.map && data.map((item) => (
        <tr key={item.id}>
          <td>{item.nombre}</td>
          <td>{item.grupoAlimento}</td>
          <td>{item.gramosPorRacion}</td>
          <td>
            <Button className="mx-1 my-1" variant="secondary" size="sm">Editar</Button>
            <Button className="mx-1 my-1" variant="danger" size="sm">Borrar</Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default DataTableRowAlimentos;
