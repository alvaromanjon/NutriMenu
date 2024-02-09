import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";

const AlimentoDetailsTable = ({ rowData, colDefs }) => {
  return (
    <div className={"ag-theme-quartz"} style={{ height: "500px" }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default AlimentoDetailsTable;
