import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

// Pages
import GlobalAdmin from "./Home/GlobalAdmin/GlobalAdmin";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import ForgotPassword from "./pages/login/ForgotPassword";
import NotFound from "./utils/NotFound";

// Layouts

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<GlobalAdmin />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
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
