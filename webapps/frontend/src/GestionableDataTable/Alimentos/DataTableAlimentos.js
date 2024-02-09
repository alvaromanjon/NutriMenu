import DataTableHeader from "../DataTableHeader";
import DataTableRowAlimentos from "./DataTableRowAlimentos"
import { Table, Container } from "react-bootstrap";
import { useState, useEffect } from 'react';
import Loading from "../../Utils/Loading";

const DataTableAlimentos = () => {
  const valores = ["Nombre", "Grupo alimenticio", "Gramos por ración"];
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/alimentos')
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
          {data && <DataTableRowAlimentos data={data} />}
        </tbody>
      </Table>
    </Container>
  );
};

export default DataTableAlimentos;
