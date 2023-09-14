import DataTableHeader from "../DataTableHeader";
import DataTableRow from "../DataTableRow";

const DataTableEmpresas = ({ data }) => {
  const valores = ["ID", "Nombre", "Email", "Dirección", "Teléfono", "CIF"];

  return (
    <div className="gestionable-data-content">
      <table>
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>
          <DataTableRow data={data} />
        </tbody>
      </table>
    </div>
  );
};

export default DataTableEmpresas;
