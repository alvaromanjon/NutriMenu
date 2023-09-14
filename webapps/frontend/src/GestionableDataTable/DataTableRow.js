const DataTableRow = ({ data }) => {
  return (
    <>
      {data.map((item, indexObj) => (
        <tr key={indexObj}>
          {Object.entries(item).map(([key, value], index) => (
            <td key={index}>{value}</td>
          ))}
          <td>
            <button>Ver</button>
            <button>Editar</button>
            <button>Borrar</button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default DataTableRow;
