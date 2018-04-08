import React from "react";
import { NavContainer } from "./style";
import NavItem from "./NavItem";
import { withRouter } from "react-router-dom";

const Navigation = ({ location, routes }) => {
  const isHome = location.pathname === "/";

  const mapRoutes = routes.map(route => (
    <NavItem key={route.name} name={route.name} path={route.path} isHome={isHome} />
  ));
  return <NavContainer isHome={isHome}>{mapRoutes}</NavContainer>;
};

export default withRouter(Navigation);

