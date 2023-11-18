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
        <img src="hike.jpg" alt="" />
        hello
      </div>
    </div>
  );
};

export default Home;
