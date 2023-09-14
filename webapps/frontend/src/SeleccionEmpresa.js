import useFetch from "./useFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SeleccionDatosList from "./SeleccionDatosList";

const SeleccionEmpresaButton = ({ idEmpresa }) => {
  return (
    <div className="seleccion-datos-button">
      <Link to={idEmpresa}>
        <button>Continuar</button>
      </Link>
    </div>
  );
}

const SeleccionEmpresa = () => {
  const { data: empresas, isPending, error } = useFetch("http://localhost:8080/empresas");
  const [empresaEscogida, setEmpresaEscogida] = useState("");

  const handleClick = (empresa) => {
    setEmpresaEscogida(empresa);
  };

  useEffect(() => {
    console.log(empresaEscogida)
  }, [empresaEscogida]);

  return (
    <div className="seleccion-empresas">
      <h1>Bienvenido, usuario</h1>
      <div className="seleccion-empresas-title">
        <h2>Selecciona una empresa</h2>
      </div>
      {error && <div>{error}</div>}
      {isPending && <div>Cargando...</div>}
      {empresas && <SeleccionDatosList items={empresas} onClick={handleClick} />}
      <div className="seleccion-datos-button">
        <Link to={empresaEscogida}>
          <button>Continuar</button>
        </Link>
      </div>
    </div>
  );
};

export default SeleccionEmpresa;
