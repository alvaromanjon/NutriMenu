import DataTableHeader from "../DataTableHeader";
import DataTableRowLocales from "./DataTableRowLocales";

const DataTableLocales = ({ data }) => {
  const valores = ["ID", "Empresa", "Nombre", "Email", "Dirección", "Teléfono"];

  return (
    <div className="gestionable-data-content">
      <table>
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>
          <DataTableRowLocales data={data} />
        </tbody>
      </table>
    </div>
  );
};

export default DataTableLocales;
