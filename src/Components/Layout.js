import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  console.log(location);
  let component;
  if (location.pathname === "/Sign-In") {
    component = children;
  } else {
    component = (
      <>
        <Header />
        {children}
      </>
    );
  }
  return component;
};

export default Layout;
