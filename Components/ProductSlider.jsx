import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Book1 from '../assets/IMAGES/AFTER.jpg'
import Book2 from '../assets/IMAGES/BLACK.jpg'
import Book3 from '../assets/IMAGES/DASH.jpg'
import Book4 from '../assets/IMAGES/HERE.jpg'
import Book5 from '../assets/IMAGES/PATIENCE.jpg'
import Book6 from '../assets/IMAGES/SMALL.webp'
import Book7 from '../assets/IMAGES/TRANSITION.jpg'
import SProduct from "./SProduct";


const ProductSlider = () => {
        var settings = {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
  return (
    <div className="slider py-5">
      <h1 className="text-center display-4 mt-4 fw-bold text-light">
        A good book is a treasure trove of humanity 
        <br/> So we embrace them with pleasure.
      </h1>
      <div className='container mt-5'>
          <Slider {...settings}>
              <div className='p-1'>
                <SProduct 
                   Image={Book1}
                   Description="AFTER LIVES"
                />
              </div>
              <div className='p-1'>
              <SProduct 
                   Image={Book2}
                   Description="BLACK MAMBA BOY"
                />
              </div>
              <div className='p-1'>
              <SProduct 
                   Image={Book3}
                   Description="DASH BEFORE DASK"
                />
              </div>
              <div className='p-1'>
              <SProduct 
                   Image={Book4}
                   Description="HERE AGAIN NOW"
                />
              </div>
              <div className='p-1'>
              <SProduct 
                   Image={Book5}
                   Description="PATIENCE IS A SUBTLE THIEF"
                />
              </div>
              <div className='p-1'>
              <SProduct 
                   Image={Book6}
                   Description="SMALL WORLDS"
                />
              </div>
              <div className='p-1'>
              <SProduct 
                   Image={Book7}
                   Description="TRANSITION FROM SLAVERY"
                />
              </div>
          </Slider>

      </div>
    </div>
  );
};

export default ProductSlider;
