import React, { Fragment } from "react";
import "../css/Grid.css";
import "../css/Grid.css";
import StaffParty1 from "../imgs/carousel/staff4.jpg";
import StaffParty2 from "../imgs/carousel/kingjohnno1.jpg";
import StaffParty3 from "../imgs/carousel/kingned1.jpg";
import StaffParty4 from "../imgs/carousel/kingned4.jpg";

const Grid = () => {
  return (
    <Fragment>
      <div className="gridContainer">
        <span className="headerText">
          <p className="text">STAFF PARTY</p>
        </span>
        <div className="gridItem">
          <img alt="staffparty1" src={StaffParty1} />
        </div>
        <div className="gridItem">
          <img alt="staffparty2" src={StaffParty2} />
        </div>
        <div className="gridItem">
          <img alt="staffparty3" src={StaffParty3} />
        </div>
        <div className="gridItem">
          <img alt="staffparty4" src={StaffParty4} />
        </div>
      </div>
    </Fragment>
  );
};

export default Grid;
