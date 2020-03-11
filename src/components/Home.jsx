import React, { Component } from "react";
import "../styles/components/Home.scss";
import moment from "moment";
import "moment/locale/es";

import formatDate from "../utils/formatDate";

const stateInicial = {
  stateAllData: [],
  defaultValue: "",
  origin: "",
  destination: "",
  todayDate: "",
  validateForm: false,
  error: false
};

export class Home extends Component {
  state = { ...stateInicial };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleGetData = e => {
    e.preventDefault();

    if (this.origin.trim() === "" || this.destination.trim() === "") {
      this.setState({
        validateForm: true
      });
      return;
    }

    this.setState({
      validateForm: false
    });

    console.log(this.state);
    // validarFormulario({
    //   origin,
    //   destination,
    //   todayDate
    // });
  };

  componentDidMount() {
    let todayDataSelect = moment().format("YYYY-MM-DD");
    this.setState({
      ...this.state,
      defaultValue: todayDataSelect,
      stateAllData: formatDate()
    });
  }

  render() {
    console.log(this.state);
    return (
      <main className="Home--main">
        <div className="Home--main-cover">
          <div className="Home--main_title">
            <h2>Rastrea tu vuelo</h2>
          </div>
          <div className="Home--main_form">
            <form
              onSubmit={this.handleGetData}
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
                    name="Origin"
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
                    name="Destination"
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
                    name="select"
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
                {!this.state.validateForm && !this.state.destination ? (
                  <button
                    type="submit"
                    className="Home--main-disabled"
                    disabled
                  >
                    BUSCAR
                  </button>
                ) : (
                  <button className="Home--main-disabled" type="submit">
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

export default Home;
