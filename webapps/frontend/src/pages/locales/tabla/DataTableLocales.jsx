import DataTableHeader from "../../../utils/DataTableHeader";
import DataTableRowLocales from "./DataTableRowLocales";
import { Table, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../../utils/Loading";

const DataTableLocales = () => {
  const valores = ["Nombre", "Email", "Dirección", "Teléfono", "Empresa"];
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/locales")
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
      <Button className="mb-3" variant="primary" as={Link} to="/locales/new">
        Crear un nuevo local
      </Button>
      <Table responsive striped bordered hover variant="tertiary">
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>{data && <DataTableRowLocales data={data} />}</tbody>
      </Table>
    </Container>
  );
};

export default DataTableLocales;
