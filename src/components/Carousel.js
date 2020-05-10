import React from "react";
import "../css/Carousel.css";
import "../css/Grid.css";
import StaffParty1 from "../imgs/carousel/staff4.jpg";

const Carousel = () => {
  return (
    <div className="carouselContainer">
      <img className="coverPic" alt="#" src={StaffParty1} />
      <span className="headerText">STAFF PARTY</span>
    </div>
  );
};

export default Carousel;
