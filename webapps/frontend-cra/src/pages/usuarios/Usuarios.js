import DataTableUsuarios from "./tabla/DataTableUsuarios";

const Usuarios = () => {
  return (
    <div className="gestionable-data-table">
      <div className="mt-4">
        <h2 className="ms-3">Gestión de usuarios</h2>
      </div>
      <DataTableUsuarios />
    </div >
  );
}

export default Usuarios;