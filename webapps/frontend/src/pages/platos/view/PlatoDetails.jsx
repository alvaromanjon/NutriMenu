import { Link, useLoaderData } from "react-router-dom";
import { calculatePlatoNutrients } from "../../../utils/calculatePlatoNutrients";
import { NutrientChartData, NutrientChartOptions } from "../../../utils/nutrientChartData";
import { NutrientTableData, NutrientTableHeader, NutrientTableStyle } from "../../../utils/nutrientTableData";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { AgChartsReact } from "ag-charts-react";
import AgGridTableRepresentation from "../../../utils/AgGridTableRepresentation";

const PlatoDetails = () => {
  const plato = useLoaderData();
  console.log(plato);
  const nutrientesSumados = calculatePlatoNutrients(plato[0]);
  const chartData = NutrientChartData(nutrientesSumados);
  const tableData = NutrientTableData(nutrientesSumados);
  const colDefs = NutrientTableHeader();
  const rowStyle = NutrientTableStyle;
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
          <AgGridTableRepresentation rowData={tableData} colDefs={colDefs} getRowStyle={rowStyle} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="text-center mt-4">
            <Card.Header>
              <Card.Title>Alimentos</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Ingredientes que forman el plato</Card.Subtitle>
            </Card.Header>
            <Card.Body className="p-4">
              <Table responsive>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {plato[0].alimentos.map((item) => (
                    <tr key={item.id}>
                      <td style={{ verticalAlign: "middle" }}>
                        <Link
                          to={`/alimentos/${item.alimento.id}`}
                          style={{ color: "inherit", textDecoration: "inherit" }}
                        >
                          {item.alimento.nombre}
                        </Link>
                      </td>
                      <td style={{ verticalAlign: "middle" }}>{item.gramosEscogidos}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlatoDetails;
