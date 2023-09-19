import DataTableHeader from "../DataTableHeader";
import DataTableRowMenus from "./DataTableRowMenus";

const DataTableMenus = ({ data }) => {
  const valores = ["ID", "Empresa", "Nombre", "Descripción", "Fecha de creación", "Fecha de modificación"];

  return (
    <div className="gestionable-data-content">
      <table>
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>
          <DataTableRowMenus data={data} />
        </tbody>
      </table>
    </div>
  );
};

export default DataTableMenus;
