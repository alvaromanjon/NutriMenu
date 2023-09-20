import DataTableHeader from "../DataTableHeader";
import DataTableRowEmpresas from "./DataTableRowEmpresas";
import { Table, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Loading from "../../utils/Loading";

const DataTableEmpresas = () => {
  const valores = ["CIF", "Nombre", "Email", "Dirección", "Teléfono"];
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/empresas")
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
      <Table responsive striped bordered hover variant="tertiary">
        <thead>
          <tr>
            <DataTableHeader valores={valores} />
          </tr>
        </thead>
        <tbody>{data && <DataTableRowEmpresas data={data} />}</tbody>
      </Table>
    </Container>
  );
};

export default DataTableEmpresas;
