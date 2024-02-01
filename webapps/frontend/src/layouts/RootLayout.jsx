import { Nav, Navbar, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const RootLayout = () => {
  const { usuario } = useContext(UserContext);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("usuario-sesion");
    navigate("/");
    window.location.reload();
  };

  const adminNavBar = () => {
    return (
      <>
        <Nav className="mr-auto">
          <Nav.Link className="ms-3" as={NavLink} to={"/empresas/table"} onClick={() => setExpanded(false)}>
            Gestión de empresas
          </Nav.Link>
          <Nav.Link className="ms-3" as={NavLink} to={"/locales/table"} onClick={() => setExpanded(false)}>
            Gestión de locales
          </Nav.Link>
          <Nav.Link className="ms-3" as={NavLink} to={"/usuarios/table"} onClick={() => setExpanded(false)}>
            Gestión de usuarios
          </Nav.Link>
          <Nav.Link className="ms-3" as={NavLink} to={"/alimentos/table"} onClick={() => setExpanded(false)}>
            Gestión de alimentos
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Button className="mx-3 my-2" variant="outline-light" onClick={() => handleLogout()}>
            Cerrar sesión
          </Button>
        </Nav>
      </>
    );
  };

  const editorNavBar = () => {
    return (
      <>
        <Nav className="mr-auto">
          <Nav.Link className="ms-3" as={NavLink} to={"/menus"} onClick={() => setExpanded(false)}>
            Gestión de menús
          </Nav.Link>
          <Nav.Link className="ms-3" as={NavLink} to={"/platos"} onClick={() => setExpanded(false)}>
            Gestión de platos
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Button className="mx-3 my-2" variant="outline-light" onClick={() => handleLogout()}>
            Cerrar sesión
          </Button>
        </Nav>
      </>
    );
  };

  const camareroNavBar = () => {
    return (
      <>
        <Nav className="mr-auto">
          <Nav.Link className="ms-3" as={NavLink} to={"/menus"} onClick={() => setExpanded(false)}>
            Gestión de menús
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Button className="mx-3 my-2" variant="outline-light" onClick={() => handleLogout()}>
            Cerrar sesión
          </Button>
        </Nav>
      </>
    );
  };

  const invitadoNavBar = () => {
    return (
      <>
        <Nav className="ms-auto">
          <Button
            className="mx-3 my-2"
            variant="outline-light"
            as={NavLink}
            to="/login"
            onClick={() => setExpanded(false)}
          >
            Iniciar sesión
          </Button>
        </Nav>
      </>
    );
  };

  return (
    <>
      <header>
        <Navbar className="shadow" bg="dark" variant="dark" expand="lg" expanded={expanded}>
          <Navbar.Brand className="ms-3" href="/">
            NutriMenu
          </Navbar.Brand>
          <Navbar.Toggle
            className="me-3"
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            {usuario.rol === "ADMINISTRADOR" && adminNavBar()}
            {usuario.rol === "EDITOR" && editorNavBar()}
            {usuario.rol === "CAMARERO" && camareroNavBar()}
            {!usuario.rol && invitadoNavBar()}
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
