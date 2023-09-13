import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Creo que te has equivocado 🤕</h2>
      <p>La página a la que acabas de intentar acceder no existe :(</p>
      <Link to="/">Vuelve a la página de inicio</Link>
    </div>
  );
};

export default NotFound;
