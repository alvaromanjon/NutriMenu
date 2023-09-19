import { Nav, Navbar, Button } from "react-bootstrap";

const GlobalAdminNavbar = ({ handleClick }) => {

  return (
    <Navbar className="shadow" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="ms-3" href="/">NutriMenu</Navbar.Brand>
      <Navbar.Toggle className="me-3" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="ms-3" onClick={() => handleClick("gestion_empresas")}>Gestión de empresas</Nav.Link>
          <Nav.Link className="ms-3" onClick={() => handleClick("gestion_locales")}>Gestión de locales</Nav.Link>
          <Nav.Link className="ms-3" onClick={() => handleClick("gestion_usuarios")}>Gestión de usuarios</Nav.Link>
          <Nav.Link className="ms-3" onClick={() => handleClick("gestion_alimentos")}>Gestión de alimentos</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Button className="mx-3 my-2" variant="outline-light">Cerrar sesión</Button>
        </Nav>

      </Navbar.Collapse>
    </Navbar >
  );
};

export default GlobalAdminNavbar;
