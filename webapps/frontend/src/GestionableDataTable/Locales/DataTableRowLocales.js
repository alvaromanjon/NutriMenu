const DataTableRowLocales = ({ data }) => {
  return (
    <>
      {data.map((value, index) => {
        return (
          <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.empresa.nombre}</td>
            <td>{value.nombre}</td>
            <td>{value.email}</td>
            <td>{value.direccion}</td>
            <td>{value.telefono}</td>
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

export default DataTableRowLocales;
