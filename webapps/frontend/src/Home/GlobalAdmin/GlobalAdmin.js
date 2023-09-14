import GestionableDataTable from "../../GestionableDataTable/GestionableDataTable";
import GlobalAdminNavbar from "./GlobalAdminNavbar";
import { useState } from "react";

const GlobalAdmin = () => {
  const [tab, setTab] = useState(null);

  const handleClick = (value) => {
    setTab(value);
  };

  const data_empresas = [
    {
      id: "goiko_grill",
      nombre: "Goiko Grill",
      email: "goiko@gmail.com",
      direccion: "Calle Mayor 2",
      telefono: "900123123",
      cif: "1111111",
    },
    {
      id: "taco_bell",
      nombre: "Taco Bell",
      email: "tacobell@gmail.com",
      direccion: "Calle Mayor 2",
      telefono: "900123123",
      cif: "1111111",
    },
  ];

  const data_locales = [
    {
      id: "goiko_grill-local_burgos",
      empresa: {
        id: "goiko_grill",
        nombre: "Goiko Grill",
        email: "goiko@gmail.com",
        direccion: "Calle Mayor 2",
        telefono: "900123123",
        cif: "1111111",
      },
      nombre: "Local Burgos",
      email: "goiko@gmail.com",
      direccion: "Calle Mayor 2",
      telefono: "900123123",
    },
    {
      id: "goiko_grill-local_madrid",
      empresa: {
        id: "goiko_grill",
        nombre: "Goiko Grill",
        email: "goiko@gmail.com",
        direccion: "Calle Mayor 2",
        telefono: "900123123",
        cif: "1111111",
      },
      nombre: "Local Madrid",
      email: "goiko@gmail.com",
      direccion: "Calle Mayor 2",
      telefono: "900123123",
    },
  ];

  return (
    <div>
      <GlobalAdminNavbar handleClick={handleClick} />
      {tab != null && <GlobalAdminContent tab={tab} data_empresas={data_empresas} data_locales={data_locales} />}
    </div>
  );
};

const GlobalAdminContent = ({ tab, data_empresas, data_locales }) => {
  switch (tab) {
    case "gestion_empresas":
      return <GestionableDataTable title="Gestión de empresas" data={data_empresas} type="empresas" />;
    case "gestion_locales":
      return <GestionableDataTable title="Gestión de locales" data={data_locales} type="locales" />;
    default:
      <p>Hola</p>;
  }
};

export default GlobalAdmin;
