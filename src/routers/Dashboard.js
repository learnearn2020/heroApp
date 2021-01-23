import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { DcScreen } from "../components/Dc/DcScreen";
import { HeroeScreen } from "../components/Hereos/HeroeScreen";
import { MarvelScreen } from "../components/Marvel/MarvelScreen";
import { Search } from "../components/search/Search";
import { Navbar } from "../components/ui/NavBar";
import { HereosApp } from "../HereosApp";

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exac path="/marvel" component={MarvelScreen} />
          <Route exac path="/dc" component={DcScreen} />
          <Route exac path="/search" component={Search} />
          <Route path="/heroe/:heroeId" component={HeroeScreen} />
          <Redirect to="/dc" />
        </Switch>
      </div>
    </>
  );
};
