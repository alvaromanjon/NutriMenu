import useFetch from "./useFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SeleccionDatosList from "./SeleccionDatosList";
import { useParams } from "react-router-dom";

const SeleccionLocalButton = ({ idEmpresa, idLocal, locales }) => {
  if (locales.length > 0) {
    return (
      <div className="seleccion-datos-button">
        <Link to={idLocal}>
          <button>Continuar</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="empresa-vacia-box">
        <p>No hay locales para {idEmpresa} :(</p>
        <button>Volver</button>
      </div>
    );
  }

}

const SeleccionLocal = () => {
  const { id } = useParams();
  const { data: locales, isPending, error } = useFetch("http://localhost:8080/empresas/" + id + "/locales");
  const [localEscogido, setLocalEscogido] = useState("");

  const handleClick = (local) => {
    setLocalEscogido(local);
  };

  useEffect(() => {
    console.log(localEscogido)
  }, [localEscogido]);

  return (
    <div className="seleccion-locales">
      <h1>Bienvenido, usuario</h1>
      <div className="seleccion-locales-title">
        <h2>Selecciona un local</h2>
      </div>
      {error && <div>{error}</div>}
      {isPending && <div>Cargando...</div>}
      {locales && <SeleccionDatosList items={locales} onClick={handleClick} />}
      {<SeleccionLocalButton idEmpresa={id} idLocal={localEscogido} locales={locales} />}
    </div>
  );
};

export default SeleccionLocal;
