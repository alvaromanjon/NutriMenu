import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import HomeLoggedIn from "./HomeLoggedIn";
import HomeNotLoggedIn from "./HomeNotLoggedIn";

const Home = () => {
  const { usuario } = useContext(UserContext);

  return <>{usuario.rol === "" ? <HomeNotLoggedIn /> : <HomeLoggedIn />}</>;
};

export default Home;
