import { Outlet } from "react-router-dom";

const LocalesLayout = () => {
  return (
    <div>
      <div className="mt-4">
        <h2 className="ms-3">Gestión de locales</h2>
      </div>
      <Outlet />
    </div >
  );
}

export default LocalesLayout;