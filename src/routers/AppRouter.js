import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/Login/LoginScreen";
import { Dashboard } from "./Dashboard";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export default function AppRouter() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isLogged={user.logged}
            exac
            path="/login"
            component={LoginScreen}
          />
          <PrivateRoute isLogged={user.logged} path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}
