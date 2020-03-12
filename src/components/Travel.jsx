import React, { Fragment } from "react";
import "../styles/components/Travel.scss";

export default function Travel(props) {

  return (
    <Fragment>
      <div className="Travel--header">
        <ul>
          <li>Número de vuelo</li>
          <li>Estado</li>
          <li>Origen</li>
          <li>Hora de salida</li>
          <li>Hora de llegada</li>
          <li>Destino</li>
        </ul>
      </div>
      <div className="Travel-results">
        
        {props._collection[0]._collection.map((item, index) => (
          <div className="Travel--content-result" key={index}>
            <div className="Travel--content-item">
              <h3>{item.segment.operatingCarrier} {item.segment.operatingFlightCode}</h3>
              <h3>{item.status}</h3>
              <h3>{item.segment.departureAirport}</h3>
              <h3>{item.boardingTime}</h3>
              <h3>{item.segment.arrivalDateTime.substr(11)}</h3>
              <h3>{item.segment.arrivalAirport}</h3>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
