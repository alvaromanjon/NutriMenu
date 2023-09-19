import DataTableHeader from "../DataTableHeader";
import DataTableRowLocales from "./DataTableRowLocales";
import { Table, Container } from "react-bootstrap";
import { useState, useEffect } from 'react';
import Loading from "../../Utils/Loading";

const DataTableLocales = () => {
  const valores = ["Nombre", "Email", "Dirección", "Teléfono", "Empresa"];
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/locales')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setData(data)
        setIsPending(false);
      })
      .catch((error) => {
        console.error("Ha habido un error obteniendo los datos: ", error);
        setIsPending("false");
      })
  }, []);

  if (isPending) {
    return <Loading />
  }

  return (
    <Container className="mt-3">
      <Table responsive striped bordered hover variant="tertiary">
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>
          {data && <DataTableRowLocales data={data} />}
        </tbody>
      </Table>
    </Container>
  );
};

export default DataTableLocales;
