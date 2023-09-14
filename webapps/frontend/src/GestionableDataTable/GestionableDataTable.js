import DataTableEmpresas from "./Empresas/DataTableEmpresas";

const GestionableDataTable = ({ title, data, type }) => {
  let content;

  switch (type) {
    case "empresas":
      content = <DataTableEmpresas data={data} />;
      break;
    case "locales":
      content = <DataTableLocales data={data} />;
      break;
    case "menus":
      content = <DataTableMenus data={data} />;
      break;
    default:
      break;
  }

  return (
    <div className="gestionable-data-table">
      <div className="gestionable-data-title">
        <h2>{title}</h2>
      </div>
      {content}
    </div>
  );
};

export default GestionableDataTable;
