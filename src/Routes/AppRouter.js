import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { DetalleProducto } from "../pages/DetalleProducto";
import { Main } from "../pages/Main";
import { Productos } from "../pages/Productos";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/catalogo" component={Productos} />
          <Route path="/producto/:codBag" component={DetalleProducto} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};
