import DataTableAlimentos from "./tabla/DataTableAlimentos";

const Alimentos = () => {
  return (
    <div className="gestionable-data-table">
      <div className="mt-4">
        <h2 className="ms-3">Gestión de alimentos</h2>
      </div>
      <DataTableAlimentos />
    </div >

  );
}

export default Alimentos;