import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/components/Home.scss";
import moment from "moment";
import "moment/locale/es";

import formatDate from "../utils/formatDate";

// ===================================
// Redux action search in api
// ===================================
import { searchInfo } from "../redux/actions/searchInfo";

// ===================================
// State initial
// ===================================
const stateInicial = {
  stateAllData: [],
  defaultValue: "",
  origin: "",
  destination: "",
  todayDate: "",
  validateForm: false,
  error: false,
  disabled: true
};

// ===================================
// State full class component
// ===================================
class Home extends Component {
  state = { ...stateInicial };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  // ===================================
  // Validate form
  // ===================================
  handleSubmitData = e => {
    e.preventDefault();
    const { origin, destination, defaultValue } = this.state;

    if (origin.trim() === "" || destination.trim() === "") {
      this.setState({
        ...this.state,
        validateForm: true
      });
      return;
    }

    this.setState({
      ...this.state,
      validateForm: false
    });

    // ===================================
    // reference for remove height and charge content travels
    // ===================================
    this.addClass.classList = "Home--main height-page";
    this.removeClass.classList = "hide";

    // ===================================
    // send Data To Redux Action
    // ===================================
    this.props.searchInfo({
      origin,
      destination,
      defaultValue
    });
  };

  // ===================================
  // exec functions when the dom is mounted
  // ===================================
  componentDidMount() {
    let todayDataSelect = moment().format("YYYY-MM-DD");
    this.setState({
      ...this.state,
      defaultValue: todayDataSelect,
      stateAllData: formatDate()
    });
  }

  render() {
    return (
      <main className="Home--main" ref={div => (this.addClass = div)}>
        <div className="Home--main-cover">
          <div
            className="Home--main_title"
            ref={div => (this.removeClass = div)}
          >
            <h2>Rastrea tu vuelo</h2>
          </div>
          <div className="Home--main_form">
            <form
              onSubmit={this.handleSubmitData}
              className="Home--main_formGroup"
            >
              <div className="Home--main-status">
                <div className="Home--main-radio">
                  <input type="radio" name="TypeOfSearch" />
                  <label className="Home--main-labels">Destino</label>
                </div>
                <div className="Home--main-radio">
                  <input type="radio" name="TypeOfSearch" />
                  <label className="Home--main-labels">Número de vuelo</label>
                </div>
              </div>
              <div className="Home--main-search">
                <div className="Home--main-origin">
                  <label className="Home--main-labels">
                    <span className="nameSpan">Origen</span>
                  </label>
                  <input
                    type="text"
                    name="origin"
                    placeholder="Origen"
                    className="Home--main-input"
                    value={this.state.origin}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="Home--main-destination">
                  <label className="Home--main-labels">
                    <span className="nameSpan">Destino</span>
                  </label>
                  <input
                    type="text"
                    name="destination"
                    placeholder="Destino"
                    className="Home--main-input"
                    value={this.state.destination}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="Home--main-out">
                  <label className="Home--main-labels">
                    <span>Fecha de salida</span>
                  </label>
                  <select
                    name="defaultValue"
                    value={this.state.defaultValue}
                    className="Home--main-input"
                    onChange={this.handleChange}
                  >
                    {this.state.stateAllData.map((item, index) => (
                      <option value={item.day} key={index}>
                        {item.formatStringDay}
                      </option>
                    ))}
                  </select>
                </div>
                {this.state.origin === "" || this.state.destination === "" ? (
                  <button
                    type="submit"
                    className="Home--main-disabled"
                    disabled
                  >
                    BUSCAR
                  </button>
                ) : (
                  <button className="Home--main-disabled show" type="submit">
                    BUSCAR
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = {
  searchInfo
};

export default connect(null, mapDispatchToProps)(Home);
