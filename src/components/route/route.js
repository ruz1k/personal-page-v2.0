import React from "react";
import { useRoutes } from "hookrouter";

import {About, Home, Resume, Contact} from '../pages'

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/resume": () => <Resume />,
  "/contact": () => <Contact />
};

const Route = () => {
  const routeResult = useRoutes(routes);

  return routeResult
};

export default Route;
