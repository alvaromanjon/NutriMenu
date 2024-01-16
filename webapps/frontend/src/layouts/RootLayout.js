import { Nav, Navbar, Button } from "react-bootstrap";
import { useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const RootLayout = () => {
  const { usuario, setUsuario } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("usuario-sesion");
    navigate("/");
    window.location.reload();
  };

  const adminNavBar = () => {
    return (
      <>
        <Nav className="mr-auto">
          <Nav.Link className="ms-3" as={NavLink} to={"/empresas/table"}>
            Gestión de empresas
          </Nav.Link>
          <Nav.Link className="ms-3" as={NavLink} to={"/locales/table"}>
            Gestión de locales
          </Nav.Link>
          <Nav.Link className="ms-3" as={NavLink} to={"/usuarios"}>
            Gestión de usuarios
          </Nav.Link>
          <Nav.Link className="ms-3" as={NavLink} to={"/alimentos/table"}>
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
          <Nav.Link className="ms-3" as={NavLink} to={"/menus"}>
            Gestión de menús
          </Nav.Link>
          <Nav.Link className="ms-3" as={NavLink} to={"/platos"}>
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
          <Nav.Link className="ms-3" as={NavLink} to={"/menus"}>
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
          <Button className="mx-3 my-2" variant="outline-light" as={NavLink} to="/login">
            Iniciar sesión
          </Button>
        </Nav>
      </>
    );
  };

  return (
    <div>
      <header>
        <Navbar className="shadow" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand className="ms-3" href="/">
            NutriMenu
          </Navbar.Brand>
          <Navbar.Toggle className="me-3" aria-controls="basic-navbar-nav" />
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
    </div>
  );
};

export default RootLayout;
