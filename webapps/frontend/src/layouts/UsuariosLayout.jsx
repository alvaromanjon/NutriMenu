import { Outlet } from "react-router-dom";

const UsuariosLayout = () => {
  return (
    <div>
      <div className="mt-4">
        <h2 className="ms-3">Gestión de usuarios</h2>
      </div>
      <Outlet />
    </div>
  );
};

export default UsuariosLayout;
