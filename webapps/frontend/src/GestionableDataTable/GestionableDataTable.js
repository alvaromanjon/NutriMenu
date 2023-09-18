import DataTableEmpresas from "./Empresas/DataTableEmpresas";
import DataTableLocales from "./Locales/DataTableLocales";
import DataTableMenus from "./Menus/DataTableMenus";
import DataTablePlatos from "./Platos/DataTablePlatos";

const GestionableDataTable = ({ title, data, type }) => {
  let content;

  return (
    <div className="gestionable-data-table">
      <div className="mt-4">
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

    case "platos":
      return <DataTablePlatos data={data} />;

    default:
      break;
  }
};
export default GestionableDataTable;
