import useFetch from "./useFetch";
import SeleccionDatosList from "./SeleccionDatosList";
import { useParams } from "react-router-dom";

const SeleccionLocal = () => {
  const { id } = useParams();
  const { data: locales, isPending, error } = useFetch("http://localhost:8080/empresas/" + id + "/locales");

  return (
    <div className="seleccion-locales">
      <h1>Bienvenido, usuario</h1>
      <div className="seleccion-locales-title">
        <h2>Selecciona un local</h2>
      </div>
      {error && <div>{error}</div>}
      {isPending && <div>Cargando...</div>}
      {locales && <SeleccionDatosList items={locales} url="/empresas/choose/" />}
    </div>
  );
};

export default SeleccionLocal;
