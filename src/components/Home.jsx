import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment"
import "moment/locale/es";
import "../styles/components/Home.scss";

import { searchInfo } from "../redux/actions/searchInfo"
import formatDate from "../utils/formatDate"

const Home = () => {

  const [stateAllData, setStateTodayData] = useState([])
  const [defaultValue, setTodaySelect] = useState({ defaultValue: "" })

  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [todayDate, setTodayDate] = useState("")

  const [validateForm, setValidateForm] = useState(false)

  const dispatch = useDispatch();

  const validarFormulario = (data) => dispatch( searchInfo(data) )

  useEffect(() => {
    setStateTodayData(formatDate()) 
    let todayDataSelect = moment().format("YYYY-MM-DD")
    setTodaySelect(todayDataSelect)
  }, [])

  const handleGetData = e => {
    e.preventDefault();
    
    if(origin.trim() === '' ||  destination.trim() === '') {
      setValidateForm(true);
      return;
    }

    setValidateForm(false);
    validarFormulario({
      origin,
      destination,
      todayDate
    })
  }

  return (
    
    <main className="Home--main">
      <div className="Home--main_tittle">
        <h2>Rastrea tu vuelo</h2>
      </div>
      <div className="Home--main_form">
        <form onSubmit={handleGetData} className="Home--main-formGroup">
          <div className="Home--main-status">
            <div className="Home--main-radio">
              <input type="radio" name="TypeOfSearch" />
              <label>Destino</label>
            </div>
            <div className="Home--main-radio">
              <input type="radio" name="TypeOfSearch" />
              <label>Número de vuelo</label>
            </div>
          </div>
          <div className="Home--main-search">
            <input 
              type="text" 
              name="Origin" 
              placeholder="Origen" 
              className="Home--main-input"
              value={origin}
              onChange={ e => setOrigin(e.target.value)}
            />
            <input 
              type="text" 
              name="Destination" 
              placeholder="Destino" 
              className="Home--main-input" 
              value={destination}
              onChange={ e => setDestination(e.target.value)}
            />
            <select 
              name="select"
              value={defaultValue} 
              className="Home--main-input"
              onChange={ e => setTodayDate(e.target.value)}
            >
                {stateAllData.map((item, index) => (
                  <option value={item.day} key={index}>{item.formatStringDay}</option> 
                ))} 
            </select>
            {!validateForm && !destination ? <button type="submit" className="Home--main-disabled" disabled>BUSCAR</button> : <button type="submit">BUSCAR</button>}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Home;
