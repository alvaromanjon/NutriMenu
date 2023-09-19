import GestionableDataTable from "../../GestionableDataTable/GestionableDataTable";
import GlobalAdminNavbar from "./GlobalAdminNavbar";
import { useState } from "react";

const GlobalAdmin = () => {
  const [tab, setTab] = useState(null);

  const handleClick = (value) => {
    setTab(value);
  };

  return (
    <div>
      <GlobalAdminNavbar handleClick={handleClick} />
      {tab != null && (
        <GlobalAdminContent
          tab={tab}
        />
      )}
    </div>
  );
};

const GlobalAdminContent = ({ tab }) => {
  switch (tab) {
    case "gestion_empresas":
      return <GestionableDataTable title="Gestión de empresas" type="empresas" />;
    case "gestion_locales":
      return <GestionableDataTable title="Gestión de locales" type="locales" />;
    case "gestion_usuarios":
      return <GestionableDataTable title="Gestión de usuarios" type="usuarios" />;
    case "gestion_alimentos":
      return <GestionableDataTable title="Gestión de alimentos" type="alimentos" />;
    default:
      break
  }
};

export default GlobalAdmin;
