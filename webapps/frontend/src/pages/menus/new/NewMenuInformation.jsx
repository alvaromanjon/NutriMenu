import { Card, Form } from "react-bootstrap";
import { usePlatosLocalesMenu } from "../../../store/platosLocalesMenu";

const NewMenuInformation = () => {
  const [nombre, descripcion, fechaPublicacion, setNombre, setDescripcion, setFechaPublicacion] = usePlatosLocalesMenu(
    (state) => [
      state.nombre,
      state.descripcion,
      state.fechaPublicacion,
      state.setNombre,
      state.setDescripcion,
      state.setFechaPublicacion,
    ],
  );

  return (
    <Card className="mb-4">
      <Card.Header>
        <Card.Title className="text-center">Información sobre el menú</Card.Title>
      </Card.Header>
      <Card.Body className="p-4">
        <Form className="justify-content-md-center">
          <Form.Group className="mb-3">
            <Form.Label>Nombre del menú</Form.Label>
            <Form.Control
              name="nombre"
              type="text"
              placeholder="Menú del viernes"
              value={nombre}
              onChange={(e) => setNombre(e.currentTarget.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción del menú</Form.Label>
            <Form.Control
              name="descripcion"
              type="text"
              placeholder="Este es el menú del día de los viernes"
              value={descripcion}
              onChange={(e) => setDescripcion(e.currentTarget.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha de publicación del menú</Form.Label>
            <Form.Control
              name="fechaPublicacion"
              type="date"
              value={fechaPublicacion}
              onChange={(e) => setFechaPublicacion(e.currentTarget.value)}
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewMenuInformation;
