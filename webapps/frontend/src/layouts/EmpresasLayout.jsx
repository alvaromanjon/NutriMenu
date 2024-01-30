import { Outlet } from "react-router-dom";

const EmpresasLayout = () => {
  return (
    <div>
      <div className="mt-4">
        <h2 className="ms-3">Gestión de empresas</h2>
      </div>
      <Outlet />
    </div>
  );
};

export default EmpresasLayout;
