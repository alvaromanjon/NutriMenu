import DataTableHeader from "../../../utils/DataTableHeader";
import DataTableRowUsuarios from "./DataTableRowUsuarios";
import { Table, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../../utils/Loading";

const DataTableUsuarios = () => {
  const valores = ["Usuario", "Nombre", "Email", "Rol", "Empresa", "Local"];
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/usuarios")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((error) => {
        console.error("Ha habido un error obteniendo los datos: ", error);
        setIsPending("false");
      });
  }, []);

  if (isPending) {
    return <Loading />;
  }

  return (
    <Container className="mt-3">
      <Button className="mb-3" variant="primary" as={Link} to="/usuarios/new">Crear un nuevo usuario</Button>
      <Table responsive striped bordered hover variant="tertiary">
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>{data && <DataTableRowUsuarios data={data} />}</tbody>
      </Table>
    </Container>
  );
};

export default DataTableUsuarios;
