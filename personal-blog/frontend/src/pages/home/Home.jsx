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
      <img src="hike.jpg" alt="" style={{ width: "70vw", height: "80vh" }} />
      hello
    </div>
  );
};

export default Home;
