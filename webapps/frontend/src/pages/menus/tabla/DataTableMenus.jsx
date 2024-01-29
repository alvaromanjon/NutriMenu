import DataTableHeader from "../../../utils/DataTableHeader";
import DataTableRowMenus from "./DataTableRowMenus";
import { UserContext } from "../../../contexts/UserContext";
import { Table, Container } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import Loading from "../../../utils/Loading";

const DataTableMenus = () => {
  const valores = ["Nombre", "Descripción", "Fecha de creación", "Fecha de modificación"];
  const { usuario, setUsuario } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/menus?id_local=${usuario.local.id}`)
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
        <tbody>{data && <DataTableRowMenus data={data} />}</tbody>
      </Table>
    </Container>
  );
};

export default DataTableMenus
