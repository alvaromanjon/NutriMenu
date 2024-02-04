import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Context
import { UserProvider } from "./contexts/UserContext";

// Pages
import Home from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import NotFound from "./utils/NotFound";

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
import GestionLayout from "./layouts/Gestionlayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />

      <Route path="empresas" element={<GestionLayout title="Gestión de empresas" />}>
        <Route index element={<DataTableEmpresas />} />
        <Route path="new" element={<NewEmpresa />} />
      </Route>

      <Route path="locales" element={<GestionLayout title="Gestión de locales" />}>
        <Route index element={<DataTableLocales />} />
        <Route path="new" element={<NewLocal />} />
      </Route>

      <Route path="usuarios" element={<GestionLayout title="Gestión de usuarios" />}>
        <Route index element={<DataTableUsuarios />} />
        <Route path="new" element={<NewUsuario />} />
      </Route>

      <Route path="alimentos" element={<GestionLayout title="Gestión de alimentos" />}>
        <Route index element={<DataTableAlimentos />} />
        <Route path="new" element={<NewAlimento />}>
          <Route path="search" element={<NewAlimentoSearch />} />
          <Route path="create" element={<NewAlimentoCreate />} />
          <Route path="create/components" element={<NewAlimentoCreateComponents />} />
          <Route path="create/vitamins" element={<NewAlimentoCreateVitamins />} />
          <Route path="create/minerals" element={<NewAlimentoCreateMinerals />} />
        </Route>
      </Route>

      <Route path="menus" element={<GestionLayout title="Gestión de menús" />}></Route>

      <Route path="platos" element={<GestionLayout title="Gestión de platos" />}></Route>

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
