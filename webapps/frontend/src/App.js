import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Context
import { UserProvider } from "./contexts/UserContext";

// Pages
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import NotFound from "./utils/NotFound"
import Empresas from "./pages/empresas/Empresas";
import Locales from "./pages/locales/Locales";
import Alimentos from "./pages/alimentos/Alimentos";
import Menus from "./pages/menus/Menus";
import Usuarios from "./pages/usuarios/Usuarios";
import Platos from "./pages/platos/Platos";


// Layouts
import RootLayout from "./layouts/RootLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="empresas" element={<Empresas />} />
      <Route path="locales" element={<Locales />} />
      <Route path="usuarios" element={<Usuarios />} />
      <Route path="menus" element={<Menus />} />
      <Route path="platos" element={<Platos />} />
      <Route path="alimentos" element={<Alimentos />} />
      <Route path="*" element={<NotFound />} />
    </Route>
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
