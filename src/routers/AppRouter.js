import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginScreen } from "../components/Login/LoginScreen";
import { MarvelScreen } from "../components/Marvel/MarvelScreen";
import { Navbar } from "../components/ui/NavBar";
import { Dashboard } from "./Dashboard";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exac path="/login" component={LoginScreen} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}
