import React from "react";

import Header from "../components/Header";
import Travels from "../components/Travels";

// ===================
// Principal container with all base components
// ===================

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Travels />
    </>
  );
};
export default Layout;
