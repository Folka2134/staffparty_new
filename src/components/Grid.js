import React, { Fragment } from "react";
import "../css/Grid.css";

const Grid = () => {
  return (
    <Fragment>
      <div className="gridContainer">
        <div className="gridItem"></div>
        <div className="gridItem"></div>
        <div className="gridItem"></div>
        <div className="gridItem"></div>
        <span className="headerText">STAFF PARTY</span>
      </div>
    </Fragment>
  );
};

export default Grid;
