import GlobalAdmin from "./GlobalAdmin";

const GlobalAdminNavbar = ({ handleClick }) => {
  return (
    <nav className="global-admin-navbar">
      <h1>NutriMenu</h1>
      <button onClick={() => handleClick("gestion_empresas")}>Gestión de empresas</button>
      <button onClick={() => handleClick("gestion_locales")}>Gestión de locales</button>
      <button onClick={() => handleClick("gestion_menus")}>Gestión de menús</button>
      <button onClick={() => handleClick("gestion_platos")}>Gestión de platos</button>
    </nav>
  );
};

export default GlobalAdminNavbar;
