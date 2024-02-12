import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import HomeLoggedIn from "./HomeLoggedIn";
import HomeSelectEmpresa from "./NotLoggedIn/HomeSelectEmpresa";

const Home = () => {
  const { usuario } = useContext(UserContext);

  return <>{usuario.rol === "" ? <HomeSelectEmpresa /> : <HomeLoggedIn />}</>;
};

export default Home;
