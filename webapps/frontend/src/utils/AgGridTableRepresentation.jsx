import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";

const AgGridTableRepresentation = ({ rowData, colDefs, getRowStyle }) => {
  return (
    <div className={"ag-theme-quartz"} style={{ height: "500px" }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} getRowStyle={getRowStyle} />
    </div>
  );
};

export default AgGridTableRepresentation;
