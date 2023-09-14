import DataTableHeader from "../DataTableHeader";
import DataTableRowPlatos from "./DataTableRowPlatos";

const DataTablePlatos = ({ data }) => {
  const valores = ["ID", "Empresa", "Nombre", "Tipo de plato", "Fecha de creación", "Fecha de modificación"];

  return (
    <div className="gestionable-data-content">
      <table>
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>
          <DataTableRowPlatos data={data} />
        </tbody>
      </table>
    </div>
  );
};

export default DataTablePlatos;
