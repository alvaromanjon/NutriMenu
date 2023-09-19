import DataTableEmpresas from "./Empresas/DataTableEmpresas";
import DataTableLocales from "./Locales/DataTableLocales";
import DataTableUsuarios from "./Usuarios/DataTableUsuarios"
import DataTableAlimentos from "./Alimentos/DataTableAlimentos"

const GestionableDataTable = ({ title, type }) => {

  return (
    <div className="gestionable-data-table">
      <div className="mt-4">
        <h2 className="ms-3">{title}</h2>
      </div>
      <GestionableDataTableType type={type} />
    </div >
  );
};

const GestionableDataTableType = ({ type }) => {
  switch (type) {
    case "empresas":
      return <DataTableEmpresas />;

    case "locales":
      return <DataTableLocales />;

    case "usuarios":
      return <DataTableUsuarios />;

    case "alimentos":
      return <DataTableAlimentos />;

    default:
      break;
  }
};
export default GestionableDataTable;
