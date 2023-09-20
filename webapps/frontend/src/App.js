import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Context
import { UserProvider } from "./contexts/UserContext";

// Pages
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import NotFound from "./utils/NotFound"
import Locales from "./pages/locales/Locales";
import Menus from "./pages/menus/Menus";
import Usuarios from "./pages/usuarios/Usuarios";
import Platos from "./pages/platos/Platos";

// Tablas
import DataTableEmpresas from "./pages/empresas/tabla/DataTableEmpresas";
import DataTableAlimentos from "./pages/alimentos/tabla/DataTableAlimentos";

// Nuevo item
import NewAlimento from "./pages/alimentos/new/NewAlimento";

// Layouts
import RootLayout from "./layouts/RootLayout"
import EmpresasLayout from "./layouts/EmpresasLayout";
import AlimentosLayout from "./layouts/AlimentosLayout";
import NewAlimentoSearch from "./pages/alimentos/NewAlimentoSearch";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="empresas" element={< EmpresasLayout />}>
        <Route path="table" element={<DataTableEmpresas />} />
      </Route>
      < Route path="locales" element={< Locales />} />
      < Route path="usuarios" element={< Usuarios />} />
      < Route path="menus" element={< Menus />} />
      < Route path="platos" element={< Platos />} />

      < Route path="alimentos" element={< AlimentosLayout />}>
        <Route path="table" element={<DataTableAlimentos />} />
        <Route path="new" element={<NewAlimento />}>
          <Route path="search" element={<NewAlimentoSearch />} />
        </Route>

      </Route>

      < Route path="*" element={< NotFound />} />
    </Route >
  )
);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />;
    </UserProvider>
  );
}

export default App;
