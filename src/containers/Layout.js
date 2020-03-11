import React from "react";

import Header from "../components/Header";
import Travels from "../components/Travels";

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
