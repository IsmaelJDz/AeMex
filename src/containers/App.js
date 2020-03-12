import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//===================================
//  General components with react router
//===================================

import Home from "../components/Home";
import Layout from "../containers/Layout";
import NotFound from "../containers/NotFound";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
