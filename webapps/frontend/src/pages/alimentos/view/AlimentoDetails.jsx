import { useLoaderData } from "react-router-dom";
import { AgChartsReact } from "ag-charts-react";
import { Col, Container, Row } from "react-bootstrap";
import { NutrientChartData, NutrientChartOptions } from "../../../utils/nutrientChartData";
import { NutrientTableData, NutrientTableHeader, NutrientTableStyle } from "../../../utils/nutrientTableData";
import { flattenObject } from "../../../utils/flattenObject";
import AgGridTableRepresentation from "../../../utils/AgGridTableRepresentation";

const AlimentoDetails = () => {
  const alimento = useLoaderData();
  const alimentoTransformado = flattenObject(alimento[0].componentesNutricionales);
  const chartData = NutrientChartData(alimentoTransformado);
  const tableData = NutrientTableData(alimentoTransformado);
  const colDefs = NutrientTableHeader();
  const rowStyle = NutrientTableStyle;
  const chartOptions = NutrientChartOptions(chartData);

  return (
    <Container fluid="md">
      <Row>
        <Col className="text-center mb-2 mt-3">
          <h3>{alimento[0].nombre}</h3>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <AgChartsReact options={chartOptions} />
        </Col>
        <Col md={6}>
          <AgGridTableRepresentation rowData={tableData} colDefs={colDefs} getRowStyle={rowStyle} />
        </Col>
      </Row>
    </Container>
  );
};

export default AlimentoDetails;
