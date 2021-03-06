import React from "react";
import "../styles/components/Spinner.scss";

// ===================
// Spinner when the page is charging
// ===================
const Spinner = () => {
  return (
    <div className="contenido-spinner">
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
        </div>
    </div>
  );
};

export default Spinner;
