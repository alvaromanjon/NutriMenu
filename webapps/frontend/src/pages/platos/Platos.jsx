import DataTablePlatos from "./tabla/DataTablePlatos";

const Platos = () => {
  return (
    <div className="gestionable-data-table">
      <div className="mt-4">
        <h2 className="ms-3">Gestión de platos</h2>
      </div>
      <DataTablePlatos />
    </div>
  );
};

export default Platos;
