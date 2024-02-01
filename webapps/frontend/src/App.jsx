import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Context
import { UserProvider } from "./contexts/UserContext";

// Pages
import Home from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import NotFound from "./utils/NotFound";
import Menus from "./pages/menus/Menus";
import Platos from "./pages/platos/Platos";

// Tablas
import DataTableEmpresas from "./pages/empresas/tabla/DataTableEmpresas";
import DataTableAlimentos from "./pages/alimentos/tabla/DataTableAlimentos";
import DataTableLocales from "./pages/locales/tabla/DataTableLocales";
import DataTableUsuarios from "./pages/usuarios/tabla/DataTableUsuarios";

// Nuevo item
import NewAlimento from "./pages/alimentos/new/NewAlimento";
import NewEmpresa from "./pages/empresas/new/NewEmpresa";
import NewLocal from "./pages/locales/new/NewLocal";
import NewUsuario from "./pages/usuarios/new/NewUsuario";
import NewAlimentoSearch from "./pages/alimentos/new/NewAlimentoSearch";
import NewAlimentoCreate from "./pages/alimentos/new/NewAlimentoCreate";
import NewAlimentoCreateComponents from "./pages/alimentos/new/NewAlimentoCreateComponents";
import NewAlimentoCreateMinerals from "./pages/alimentos/new/NewAlimentoCreateMinerals";
import NewAlimentoCreateVitamins from "./pages/alimentos/new/NewAlimentoCreateVitamins";

// Layouts
import RootLayout from "./layouts/RootLayout";
import EmpresasLayout from "./layouts/EmpresasLayout";
import AlimentosLayout from "./layouts/AlimentosLayout";
import LocalesLayout from "./layouts/LocalesLayout";
import UsuariosLayout from "./layouts/UsuariosLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />

      <Route path="empresas" element={<EmpresasLayout />}>
        <Route path="new" element={<NewEmpresa />} />
        <Route path="table" element={<DataTableEmpresas />} />
      </Route>

      <Route path="locales" element={<LocalesLayout />}>
        <Route path="table" element={<DataTableLocales />} />
        <Route path="new" element={<NewLocal />} />
      </Route>

      <Route path="usuarios" element={<UsuariosLayout />}>
        <Route path="table" element={<DataTableUsuarios />} />
        <Route path="new" element={<NewUsuario />} />
      </Route>

      <Route path="menus" element={<Menus />} />

      <Route path="platos" element={<Platos />} />

      <Route path="alimentos" element={<AlimentosLayout />}>
        <Route path="table" element={<DataTableAlimentos />} />
        <Route path="new" element={<NewAlimento />}>
          <Route path="search" element={<NewAlimentoSearch />} />
          <Route path="create" element={<NewAlimentoCreate />} />
          <Route path="createComponents" element={<NewAlimentoCreateComponents />} />
          <Route path="createVitamins" element={<NewAlimentoCreateVitamins />} />
          <Route path="createMinerals" element={<NewAlimentoCreateMinerals />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
