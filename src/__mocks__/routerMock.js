import React, { Children } from "react";
import { BrowserRouter } from "react-router-dom";

const routerMock = props => <BrowserRouter>{Children}</BrowserRouter>;

export default routerMock;
