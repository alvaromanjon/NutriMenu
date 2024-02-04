import { Outlet } from "react-router-dom";

const GestionLayout = ({ title }) => {
  return (
    <div>
      <div className="mt-4">
        <h2 className="ms-3">{title}</h2>
      </div>
      <Outlet />
    </div>
  );
};

export default GestionLayout;
