import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import Travel from "./Travel";
import NotFound from "../containers/NotFound";

import searchData from "../redux/reducers/searchData";

export class Travels extends Component {
  render() {
    if (this.props.search.isLoading) {
      return <Spinner />;
    }

    if (this.props.search.error) {
      return <NotFound />;
    }

    return (
      <div className="Travel--main">
        {!this.isLoading && (
          <div className="Travel--main">
            {this.props.search.travels.map((item, id) => (
              <Travel key={id} {...item} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ stateData }) => searchData;

export default connect(mapStateToProps, null)(Travels);
