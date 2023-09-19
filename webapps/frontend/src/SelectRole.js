import { Link } from "react-router-dom";

const SelectRole = () => {
  return (
    <div className="select-role-content">
      <h1>¿Qué tipo de usuario eres?</h1>
      <div className="select-role-buttons">
        <Link to="/globaladmin">
          <button>Administrador global</button>
        </Link>
        <Link to="/empresaadmin">
          <button>Administrador de empresa</button>
        </Link>
        <Link to="/localadmin">
          <button>Administrador de local</button>
        </Link>
        <Link to="/empresas/choose">
          <button>Usuario</button>
        </Link>
      </div>
    </div>
  );
};

export default SelectRole;
