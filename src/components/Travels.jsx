import React, { Component } from "react";

export class Travels extends Component {
  state = {
    travel: false
  };

  render() {
    return (
      <div className="Travel--main">
        {this.state.travel && (
          <div className="Travel--main">
            <h2>TRAVELS</h2>
          </div>
        )}
      </div>
    );
  }
}

export default Travels;
