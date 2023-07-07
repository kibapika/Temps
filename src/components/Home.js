import React from "react";
import ThreeDays from "./ThreeDays";
import Current from "./Current";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="background">
      <h1 className="text-3xl py-3">Welcome to Temps</h1>
      <p>"Interactive Weather App"</p>
      <Current />
      <ThreeDays />
      <Footer />
    </div>
  );
};

export default Home;
