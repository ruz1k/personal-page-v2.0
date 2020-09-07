import React from "react";
import { useRoutes } from "hookrouter";

import {NotFoundPage, About, Home} from '../pages'

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/resume": () => <Resume />,
};

const Route = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
};

export default Route;
