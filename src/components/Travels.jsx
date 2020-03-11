import React, { Component } from "react";
import { connect } from "react-redux"
import Spinner from "./Spinner";
import searchData from "../redux/reducers/searchData";

export class Travels extends Component {

  render() {
    if(this.props.search.isLoading) {
      return <Spinner />
    }

    return (
      <div className="Travel--main">
        {!this.isLoading && (
          <div className="Travel--main">
            {console.log(this.props)}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ stateData }) => searchData;

export default connect(mapStateToProps, null)(Travels);
