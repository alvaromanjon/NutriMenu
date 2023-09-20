import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Context
import { UserProvider } from "./contexts/UserContext";

// Pages
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import ForgotPassword from "./pages/login/ForgotPassword";
import NotFound from "./utils/NotFound"

// Layouts
import RootLayout from "./layouts/RootLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
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
