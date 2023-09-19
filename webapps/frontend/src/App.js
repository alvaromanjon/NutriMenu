import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalAdmin from "./Home/GlobalAdmin/GlobalAdmin";
import Login from "./Login/Login";
import Register from "./Login/Register";
import NotFound from "./Utils/NotFound";
import ForgotPassword from "./Login/ForgotPassword";
import { useEffect, useState } from "react";

function App() {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(localStorage.getItem('usuario'));
    if (usuario) {
      setUsuario(usuario);
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <GlobalAdmin />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
