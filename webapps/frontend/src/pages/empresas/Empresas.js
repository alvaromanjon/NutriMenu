import DataTableEmpresas from "./tabla/DataTableEmpresas";

const Empresas = () => {
  return (
    <div className="gestionable-data-table">
      <div className="mt-4">
        <h2 className="ms-3">Gestión de empresas</h2>
      </div>
      <DataTableEmpresas />
    </div >
  );
}

export default Empresas;