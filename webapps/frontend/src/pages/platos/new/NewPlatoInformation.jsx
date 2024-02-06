import { Card, Form } from "react-bootstrap";
import { useAlimentosPlato } from "../../../store/alimentosPlato";

const NewPlatoInformation = () => {
  const [nombre, descripcion, tipoPlato, setNombre, setDescripcion, setTipoPlato] = useAlimentosPlato((state) => [
    state.nombre,
    state.descripcion,
    state.tipoPlato,
    state.setNombre,
    state.setDescripcion,
    state.setTipoPlato,
  ]);

  return (
    <Card className="mb-4">
      <Card.Header>
        <Card.Title className="text-center">Información sobre el plato</Card.Title>
      </Card.Header>
      <Card.Body className="p-4">
        <Form className="justify-content-md-center">
          <Form.Group className="mb-3">
            <Form.Label>Nombre del plato</Form.Label>
            <Form.Control
              name="nombre"
              type="text"
              placeholder="Berenjenas gratinadas"
              value={nombre}
              onChange={(e) => setNombre(e.currentTarget.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción del plato</Form.Label>
            <Form.Control
              name="descripcion"
              type="text"
              placeholder="Plato riquísimo"
              value={descripcion}
              onChange={(e) => setDescripcion(e.currentTarget.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tipo de plato</Form.Label>
            <Form.Select name="tipoPlato" value={tipoPlato} onChange={(e) => setTipoPlato(e.currentTarget.value)}>
              <option value="ENTRANTE">Entrante</option>
              <option value="PRIMER_PLATO">Primer plato</option>
              <option value="SEGUNDO_PLATO">Segundo plato</option>
              <option value="POSTRE">Postre</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewPlatoInformation;
