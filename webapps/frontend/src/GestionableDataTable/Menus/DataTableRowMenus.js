const DataTableRowMenus = ({ data }) => {
  return (
    <>
      {data.map((value, index) => {
        return (
          <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.empresa.nombre}</td>
            <td>{value.nombre}</td>
            <td>{value.descripcion}</td>
            <td>{value.fechaCreacion}</td>
            <td>{value.fechaModificacion}</td>
            <td>
              <button>Ver</button>
              <button>Editar</button>
              <button>Borrar</button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default DataTableRowMenus;
