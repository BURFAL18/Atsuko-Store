import React from "react";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
// import { Switch, Route, Redirect } from "react-router-dom";
import Banner from "./Components/Banner";
import Products from "./Products";
import Footer from "./Components/Footer";

import b1 from "./images/dark1.jpg";
import b2 from "./images/cc.webp";
import './css/index.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <hr />
      <Banner img={b1} />
      <hr />
      <Products />
      <hr />
      <Banner img={b2} />
      <hr />
      <Footer />
    </>
  );
};
export default App;
