import React from "react"
import AProduct from "./AProduct"
import A1 from '../assets/IMAGES/A1.jpg'
import A2 from '../assets/IMAGES/A2.jpg'
import A3 from '../assets/IMAGES/A3.jpg'
import VANNESA from '../assets/IMAGES/VANNESA.jpg'
import FARRAH from '../assets/IMAGES/FARRAH.jpg'
import MAG from '../assets/IMAGES/MAG.jpg'

const Album = () => {
  return (
    <div className="container-fluid px-4 py-5 album">
      <h2 className="text-center display-4 mt-4 fw-bold">
        We Have The Best Authors
      </h2>
      <div className='container mt-5'>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
           <AProduct 
               Image ={VANNESA}
               Image2 ={A1}
               Title ="VANNESA NAKATE"
               Description = "Environmental Activist And God Fearing Woman"
           />
               <AProduct 
               Image ={FARRAH}
               Image2 ={A2}
               Title ="NURRUDIN FARRAH"
               Description = "The Best Lecturer,Father And Author In East Africa"
           />
               <AProduct 
               Image ={MAG}
               Image2 ={A3}
               Title ="MAGRETE OKAMBI"
               Description = "Political Analyst,Senior Lecturer And Girl Child Enthusiast"
           />
      
      </div>
      </div>
    </div>
  )
}

export default Album
