import DataTableEmpresas from "./Empresas/DataTableEmpresas";
import DataTableLocales from "./Locales/DataTableLocales";
import DataTableMenus from "./Menus/DataTableMenus";

const GestionableDataTable = ({ title, data, type }) => {
  let content;

  return (
    <div className="gestionable-data-table">
      <div className="gestionable-data-title">
        <h2>{title}</h2>
      </div>
      <GestionableDataTableType data={data} type={type} />
    </div>
  );
};

const GestionableDataTableType = ({ data, type }) => {
  switch (type) {
    case "empresas":
      return <DataTableEmpresas data={data} />;

    case "locales":
      return <DataTableLocales data={data} />;

    case "menus":
      return <DataTableMenus data={data} />;

    default:
      break;
  }
};
export default GestionableDataTable;
