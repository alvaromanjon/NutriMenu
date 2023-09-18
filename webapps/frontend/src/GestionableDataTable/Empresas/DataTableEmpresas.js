import DataTableHeader from "../DataTableHeader";
import DataTableRow from "../DataTableRow";
import Table from "react-bootstrap/Table";

const DataTableEmpresas = ({ data }) => {
  const valores = ["ID", "Nombre", "Email", "Dirección", "Teléfono", "CIF"];

  return (
    <div>
      <Table className="mt-4" responsive="sm" striped bordered hover variant="tertiary">
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>
          <DataTableRow data={data} />
        </tbody>
      </Table>
    </div>
  );
};

export default DataTableEmpresas;
