import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const AlimentoDetails = () => {
  const alimento = useLoaderData();

  useEffect(() => {
    console.log(alimento);
  }, [alimento]);

  return (
    <div>
      <h2>{alimento[0].nombre}</h2>
    </div>
  );
};

export default AlimentoDetails;
