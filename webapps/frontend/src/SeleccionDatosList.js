import { Link } from "react-router-dom";

const SeleccionDatosList = ({ items, onClick }) => {

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
                onClick(item.id);
              }}
            />
            <label htmlFor={item.id + "radio"}>{item.nombre}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeleccionDatosList;
