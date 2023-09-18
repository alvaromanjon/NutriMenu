import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SeleccionEmpresa from "./SeleccionEmpresa";
import SelectRole from "./SelectRole";
import Login from "./Login";
import Register from "./Register";
import SeleccionLocal from "./SeleccionLocal";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/empresas/choose">
            <SeleccionEmpresa />
          </Route>
          <Route path="/empresas/choose/:id">
            <SeleccionLocal />
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
