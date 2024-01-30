import { Outlet } from "react-router-dom";

const AlimentosLayout = () => {
  return (
    <div className="gestionable-data-table">
      <div className="mt-4">
        <h2 className="ms-3">Gestión de alimentos</h2>
      </div>
      <Outlet />
    </div>
  );
};

export default AlimentosLayout;
