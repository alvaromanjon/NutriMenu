import { useLoaderData } from "react-router-dom";
import { calculatePlatoNutrients } from "../../../utils/calculatePlatoNutrients";
import { NutrientChartData, NutrientChartOptions } from "../../../utils/nutrientChartData";
import { NutrientTableData, NutrientTableHeader } from "../../../utils/nutrientTableData";
import { Col, Container, Row } from "react-bootstrap";
import { AgChartsReact } from "ag-charts-react";
import AgGridTableRepresentation from "../../../utils/AgGridTableRepresentation";

const PlatoDetails = () => {
  const plato = useLoaderData();
  console.log(plato);
  const nutrientesSumados = calculatePlatoNutrients(plato[0]);
  const chartData = NutrientChartData(nutrientesSumados);
  const tableData = NutrientTableData(nutrientesSumados);
  const colDefs = NutrientTableHeader();
  const chartOptions = NutrientChartOptions(chartData);

  return (
    <Container fluid="md">
      <Row>
        <Col className="text-center mb-2 mt-3">
          <h3>{plato[0].nombre}</h3>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <AgChartsReact options={chartOptions} />
        </Col>
        <Col md={6}>
          <AgGridTableRepresentation rowData={tableData} colDefs={colDefs} />
        </Col>
      </Row>
    </Container>
  );
};

export default PlatoDetails;
