const DataTableHeader = ({ valores }) => {
  return (
    <>
      {valores.map((valor) => (
        <th key={valor}>{valor}</th>
      ))}
      <th>Acciones</th>
    </>
  );
};

export default DataTableHeader;
