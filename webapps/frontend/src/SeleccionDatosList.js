import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SeleccionDatosList = ({ items, url }) => {
  const [seleccion, setSeleccion] = useState(null);
  const handleClick = (seleccionado) => {
    setSeleccion(seleccionado);
  };

  useEffect(() => {
    console.log(seleccion);
  }, [seleccion]);

  return (
    <div className="seleccion-datos-box">
      <div className="seleccion-datos-list">
        {items.map((item) => (
          <div className="seleccion-datos-item" key={item.id}>
            <input
              type="radio"
              name="seleccion"
              id={item.id + "radio"}
              onChange={() => {
                handleClick(item.id);
              }}
            />
            <label htmlFor={item.id + "radio"}>{item.nombre}</label>
          </div>
        ))}
      </div>
      <div className="seleccion-datos-button">
        <Link to={url + seleccion}>
          <button>Continuar</button>
        </Link>
      </div>
    </div>
  );
};

export default SeleccionDatosList;
