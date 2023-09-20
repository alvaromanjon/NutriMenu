import DataTableHeader from "../../../utils/DataTableHeader";
import DataTableRowPlatos from "./DataTableRowPlatos";
import { UserContext } from "../../../contexts/UserContext";
import { Table, Container } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import Loading from "../../../utils/Loading";

const DataTablePlatos = () => {
  const valores = ["Nombre", "Tipo de plato", "Fecha de creación", "Fecha de modificación"];
  const { usuario, setUsuario } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/platos?id_local=${usuario.local.id}`)
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
        <tbody>{data && <DataTableRowPlatos data={data} />}</tbody>
      </Table>
    </Container>
  );
};

export default DataTablePlatos;
