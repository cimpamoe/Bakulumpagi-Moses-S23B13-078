import { Button } from 'bootstrap'
import React from 'react'
import Product1 from "../assets/IMAGES/AFTER.jpg";
import Product2 from "../assets/IMAGES/BIGGER.webp";
import Product3 from "../assets/IMAGES/BLACK.jpg";
import Product4 from "../assets/IMAGES/DASH.jpg";
import Product5 from "../assets/IMAGES/DESSERTATION.jpg";
import Product6 from "../assets/IMAGES/HERE.jpg";
import Product7 from "../assets/IMAGES/PARADISE.jpg";
import Product8 from "../assets/IMAGES/PATIENCE.jpg";
import Product9 from "../assets/IMAGES/SMALL.webp";
import Product10 from "../assets/IMAGES/TRANSITION.jpg";
import Product11 from "../assets/IMAGES/KINTU.jpg";
import Product12 from "../assets/IMAGES/WOMAN.jpg";

import Product from './Product'

const Products = () => {
  return (
    <div className='container py-5'>
      <div className='d-flex justify-content-between'>
        <h3 className='text-success'>Customer Favorites</h3>
        <button className='btn btn-transparent fw-bold px-5 rounded-0 border border-success'>All Products</button>

      </div>
      <div className='row mt-4'>
        <Product
          Image = {Product1}
          Name = "AFTER LIVES"
          Price = "$700"
          Color = "p1color"
        />
        <Product
          Image = {Product2}
          Name = "A BIGGER PICTURE"
          Price = "$1000"
          Color = "p2color"
        />
        <Product
          Image = {Product3}
          Name = "BLACK MAMBA BOY"
          Price = "$760"
          Color = "p3color"
        />
        <Product
          Image = {Product4}
          Name = "DASH BEFORE DASK"
          Price = "$799"
          Color = "p4color"
        />
        <Product
          Image = {Product5}
          Name = "DESSERTATION"
          Price = "$870"
          Color = "p5color"
        />
        <Product
          Image = {Product6}
          Name = "HERE AGAIN NOW"
          Price = "$650"
          Color = "p6color"
        />
        <Product
          Image = {Product7}
          Name = "PARADISE"
          Price = "$999"
          Color = "p7color"
        />
        <Product
          Image = {Product8}
          Name = "PATIENCE IS A SUBTLE THIEF"
          Price = "$789"
          Color = "p8color"
        />
        <Product
          Image = {Product9}
          Name = "SMALL WORLDS"
          Price = "$890"
          Color = "p9color"
        />
        <Product
          Image = {Product10}
          Name = "TRANSITION FROM SLAVERY"
          Price = "$770"
          Color = "p10color"
        />
        <Product
          Image = {Product11}
          Name = "KINTU"
          Price = "$890"
          Color = "p11color"
        />
        <Product
          Image = {Product12}
          Name = "THE FIRST WOMAN"
          Price = "$899"
          Color = "p12color"
        />
      </div>
      
    </div>
  )
}

export default Products
