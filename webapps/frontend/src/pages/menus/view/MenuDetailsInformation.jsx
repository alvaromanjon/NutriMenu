import { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { calculateMenuNutrients } from "../../../utils/calculateMenuNutrients";
import MenuDetailsTable from "./MenuDetailsTable";
import { Card, Nav } from "react-bootstrap";
import { NutrientTableData, NutrientTableHeader } from "../../../utils/nutrientTableData";
import { NutrientChartData, NutrientChartOptions } from "../../../utils/nutrientChartData";

const MenuDetailsInformation = ({ entrante, primerPlato, segundoPlato, postre }) => {
  const [chartData, setChartData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const colDefs = NutrientTableHeader();
  const chartOptions = NutrientChartOptions(chartData);
  const [grafico, setGrafico] = useState(true);
  const [tabla, setTabla] = useState(false);

  useEffect(() => {
    const menuSumado = calculateMenuNutrients(entrante, primerPlato, segundoPlato, postre);
    const newDataGraph = NutrientChartData(menuSumado);
    const newDataTable = NutrientTableData(menuSumado);

    setChartData(newDataGraph);
    setRowData(newDataTable);
  }, [entrante, primerPlato, segundoPlato, postre]);

  return (
    <>
      <Card className="my-3">
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey={"grafico"}>
            <Nav.Item>
              <Nav.Link
                eventKey={"grafico"}
                onClick={() => {
                  setGrafico(true);
                  setTabla(false);
                }}
              >
                Gráfico
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey={"tabla"}
                onClick={() => {
                  setGrafico(false);
                  setTabla(true);
                }}
              >
                Tabla de nutrientes
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body className="p-4">
          {grafico && <AgChartsReact options={chartOptions} />}
          {tabla && <MenuDetailsTable rowData={rowData} colDefs={colDefs} />}
        </Card.Body>
      </Card>
    </>
  );
};

export default MenuDetailsInformation;
