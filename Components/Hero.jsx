import React from "react"
import HeroImage from '../assets/IMAGES/HERO2.jpg'
import Certificate from '../assets/IMAGES/Certi.webp'

const Hero = () => {
  return (
    <div className="container-fluid col-xxl-16 px-2 py-5 hero-container">
      <div className="row flex-lg-row-reverse align-items g-5 ">
        <div className="col-10 col-sm-8 col-lg-5">
   
        </div>
        <div className="col-lg-6 py-5 hero-text">
          <h1 className="display-1 fw-bold lh-2 mb-5">
            <span>Literature Books Give Life.</span>
          </h1>
          <div className="d-flex align-items-center my-5">
            <img src={Certificate} alt="" className="w-25 h-25" />
            <p className="fw-bold">The Number One Store <br />In Africa & The Entire Globe</p>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">
              Purchases
            </button>
            <button type="button" className="btn btn-light btn-lg px-4">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
