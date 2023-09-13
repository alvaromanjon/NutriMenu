import useFetch from "./useFetch";
import SeleccionDatosList from "./SeleccionDatosList";

const SeleccionEmpresa = () => {
  const { data: empresas, isPending, error } = useFetch("http://localhost:8080/empresas");

  return (
    <div className="seleccion-empresas">
      <h1>Bienvenido, usuario</h1>
      <div className="seleccion-empresas-title">
        <h2>Selecciona una empresa</h2>
      </div>
      {error && <div>{error}</div>}
      {isPending && <div>Cargando...</div>}
      {empresas && <SeleccionDatosList items={empresas} url="/empresas/choose/" />}
    </div>
  );
};

export default SeleccionEmpresa;
