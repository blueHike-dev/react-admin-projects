import Newsletter from "../../components/newsletter/Newsletter";
import Slider from "../../components/slider/Slider";
import "./home.scss";
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <div className="border">
        <Newsletter />
      </div>
      <div className="content">
        <h1>We do love going Hike</h1>
        <img src="hike.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
