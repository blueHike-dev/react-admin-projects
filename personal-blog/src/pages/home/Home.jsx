import Newsletter from "../../components/newsletter/Newsletter";
import Slider from "../../components/slider/Slider";
import "./home.scss";
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Newsletter />
    </div>
  );
};

export default Home;
