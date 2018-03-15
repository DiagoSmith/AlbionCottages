import React from "react";
import { NavContainer } from "./style";
import NavItem from "./NavItem";

const Navigation = ({ children, isHome, routes }) => {
  const mapRoutes = routes.map(route => (
    <NavItem name={route.name} path={route.path} />
  ));
  return <NavContainer>{mapRoutes}</NavContainer>;
};

export default Navigation;
