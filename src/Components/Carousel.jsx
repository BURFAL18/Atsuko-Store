import React from "react";

import img1 from "../images/c2.jpg";
import img2 from "../images/b1.jpg";


const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="c1" />
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="c2" />
          </div>
         
       
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
