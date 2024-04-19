import React from "react";
import Process1 from "../assets/IMAGES/Process1.png";
import Process2 from "../assets/IMAGES/Process2.png";
import Process3 from "../assets/IMAGES/Process3.png";

const Delivery = () => {
  return (
    <div class="container px-4 py-5" id="featured-3">
         <h2 className='text-center display-4 mt-4 fw-bold'>How Delivery Works</h2>
      <div class="row g-5 py-5 row-cols-2 row-cols-sm-3 row-cols-md-3">
        <div class="col px-2 text-center">
          <div class="bg-gradient">
            <img src={Process1} className="w-50 h-50" alt="" />
          </div>
          <h2>Country Wide</h2>
          <p>
            We deliver anywhere within the Country at your convinient time and space.Never to waste any minute.
          </p>
        </div>
        <div class="col px-3 text-center">
          <div class="bg-gradient">
            <img src={Process2} className="w-50 h-50" alt="" />
          </div>
          <h2>World Wide</h2>
          <p>
            Allover the world we got you covered with our wide range of coverage and the branches in all most every corner.
          </p>
        </div>
        <div class="col px-3 text-center">
          <div class=" bg-gradient">
            <img src={Process3} className="w-50 h-50" alt="" />
          </div>
          <h2>Door Step</h2>
          <p>
            You don't need to be afraid of how our products can reach you,we got you covered with our state of art doorstep delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
