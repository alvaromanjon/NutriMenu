import DataTableLocales from "./tabla/DataTableLocales";

const Locales = () => {
  return (
    <div className="gestionable-data-table">
      <div className="mt-4">
        <h2 className="ms-3">Gestión de locales</h2>
      </div>
      <DataTableLocales />
    </div >
  );
}

export default Locales;