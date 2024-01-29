import { Button } from "react-bootstrap"

const DataTableRowPlatos = ({ data }) => {
  return (
    <>
      {data && data.map && data.map((item) => (
        <tr key={item.id}>
          <td>{item.nombre}</td>
          <td>{item.tipoPlato}</td>
          <td>{item.fechaCreacion}</td>
          <td>{item.fechaModificacion}</td>

          <td>
            <Button className="mx-1 my-1" variant="secondary" size="sm">Editar</Button>
            <Button className="mx-1 my-1" variant="danger" size="sm">Borrar</Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default DataTableRowPlatos;
