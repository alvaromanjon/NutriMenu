import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const GlobalAdminNavbar = ({ handleClick }) => {
  return (
    <Navbar className="shadow" bg="light" expand="lg">
      <Navbar.Brand href="#home">NutriMenu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => handleClick("gestion_empresas")}>Gestión de empresas</Nav.Link>
          <Nav.Link onClick={() => handleClick("gestion_locales")}>Gestión de locales</Nav.Link>
          <Nav.Link onClick={() => handleClick("gestion_menus")}>Gestión de menús</Nav.Link>
          <Nav.Link onClick={() => handleClick("gestion_platos")}>Gestión de platos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default GlobalAdminNavbar;
