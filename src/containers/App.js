import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//===================================
//  Components
//===================================

import Home from "../containers/Home";
import Layout from "../components/Layout";
import NotFound from "../containers/NotFound";

// Main container
// const App = ({ store }) => (
//   <Provider store={store}>
//     <Router>
//       <Layout>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/movie/:id" component={MovieDetail} />
//           <Route component={NotFound} />
//         </Switch>
//       </Layout>
//     </Router>
//   </Provider>
// );

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

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
