import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Context
import { UserProvider } from "./contexts/UserContext";

// Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import NotFound from "./utils/NotFound";
import HomeSelectLocal from "./pages/home/NotLoggedIn/HomeSelectLocal";
import SelectMenuFromLocal from "./pages/home/NotLoggedIn/SelectMenuFromLocal";

// Tablas
import DataTableEmpresas from "./pages/empresas/tabla/DataTableEmpresas";
import DataTableAlimentos from "./pages/alimentos/tabla/DataTableAlimentos";
import DataTableLocales from "./pages/locales/tabla/DataTableLocales";
import DataTableUsuarios from "./pages/usuarios/tabla/DataTableUsuarios";
import DataTablePlatos from "./pages/platos/tabla/DataTablePlatos";
import DataTableMenus from "./pages/menus/tabla/DataTableMenus";

// Ver item
import AlimentoDetails from "./pages/alimentos/view/AlimentoDetails";
import MenuDetails from "./pages/menus/view/MenuDetails";

// Nuevo item
import NewAlimento from "./pages/alimentos/new/NewAlimento";
import NewAlimentoSearch from "./pages/alimentos/new/nutritionix/NewAlimentoSearch";
import NewAlimentoCreate from "./pages/alimentos/new/scratch/NewAlimentoCreate";
import NewAlimentoCreateComponents from "./pages/alimentos/new/scratch/NewAlimentoCreateComponents";
import NewAlimentoCreateVitamins from "./pages/alimentos/new/scratch/NewAlimentoCreateVitamins";
import NewAlimentoCreateMinerals from "./pages/alimentos/new/scratch/NewAlimentoCreateMinerals";
import NewEmpresa from "./pages/empresas/new/NewEmpresa";
import NewLocal from "./pages/locales/new/NewLocal";
import NewUsuario from "./pages/usuarios/new/NewUsuario";
import NewPlato from "./pages/platos/new/NewPlato";
import NewPlatoAddFromList from "./pages/platos/new/list/NewPlatoAddFromList";
import NewPlatoAddFromNutritionix from "./pages/platos/new/nutritionix/NewPlatoAddFromNutritionix";
import NewPlatoCreateFromScratch from "./pages/platos/new/scratch/NewPlatoCreateFromScratch";
import NewPlatoCreateFromScratchComponents from "./pages/platos/new/scratch/NewPlatoCreateFromScratchComponents";
import NewPlatoCreateFromScratchVitamins from "./pages/platos/new/scratch/NewPlatoCreateFromScratchVitamins";
import NewPlatoCreateFromScratchMinerals from "./pages/platos/new/scratch/NewPlatoCreateFromScratchMinerals";
import NewMenu from "./pages/menus/new/NewMenu";

// Layouts
import RootLayout from "./layouts/RootLayout";
import GestionLayout from "./layouts/GestionLayout";

// Loaders
import { listAlimentosLoader } from "./loaders/list/listAlimentosLoader";
import { listUsuariosLoader } from "./loaders/list/listUsuariosLoader";
import { listLocalesLoader } from "./loaders/list/listLocalesLoader";
import { listEmpresasLoader } from "./loaders/list/listEmpresasLoader";
import { alimentoDetailsLoader } from "./loaders/details/alimentoDetailsLoader";
import { ListLocalesEmpresaLoader } from "./loaders/list/listLocalesEmpresaLoader";
import { localMenusLoader } from "./loaders/list/localMenusLoader";
import { menuDetailsLoader } from "./loaders/details/menuDetailsLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path=":id/locales" element={<HomeSelectLocal />} loader={ListLocalesEmpresaLoader} />
      <Route path=":id/selectMenu" element={<SelectMenuFromLocal />} loader={localMenusLoader} />
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />

      <Route path="empresas" element={<GestionLayout title="Gestión de empresas" />}>
        <Route index element={<DataTableEmpresas />} loader={listEmpresasLoader} />
        <Route path="new" element={<NewEmpresa />} />
      </Route>

      <Route path="locales" element={<GestionLayout title="Gestión de locales" />}>
        <Route index element={<DataTableLocales />} loader={listLocalesLoader} />
        <Route path="new" element={<NewLocal />} loader={listEmpresasLoader} />
      </Route>

      <Route path="usuarios" element={<GestionLayout title="Gestión de usuarios" />}>
        <Route index element={<DataTableUsuarios />} loader={listUsuariosLoader} />
        <Route path="new" element={<NewUsuario />} loader={listEmpresasLoader} />
      </Route>

      <Route path="alimentos" element={<GestionLayout title="Gestión de alimentos" />}>
        <Route index element={<DataTableAlimentos />} loader={listAlimentosLoader} />
        <Route path=":id" element={<AlimentoDetails />} loader={alimentoDetailsLoader} />
        <Route path="new" element={<NewAlimento />}>
          <Route path="search" element={<NewAlimentoSearch />} />
          <Route path="create" element={<NewAlimentoCreate />} />
          <Route path="create/components" element={<NewAlimentoCreateComponents />} />
          <Route path="create/vitamins" element={<NewAlimentoCreateVitamins />} />
          <Route path="create/minerals" element={<NewAlimentoCreateMinerals />} />
        </Route>
      </Route>

      <Route path="menus" element={<GestionLayout title="Gestión de menús" />}>
        <Route index element={<DataTableMenus />} />
        <Route path=":id" element={<MenuDetails />} loader={menuDetailsLoader} />
        <Route path="new" element={<NewMenu />}></Route>
      </Route>

      <Route path="platos" element={<GestionLayout title="Gestión de platos" />}>
        <Route index element={<DataTablePlatos />} />
        <Route path="new" element={<NewPlato />}>
          <Route path="list" element={<NewPlatoAddFromList />} loader={listAlimentosLoader} />
          <Route path="search" element={<NewPlatoAddFromNutritionix />} />
          <Route path="create" element={<NewPlatoCreateFromScratch />} />
          <Route path="create/components" element={<NewPlatoCreateFromScratchComponents />} />
          <Route path="create/vitamins" element={<NewPlatoCreateFromScratchVitamins />} />
          <Route path="create/minerals" element={<NewPlatoCreateFromScratchMinerals />} />
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
