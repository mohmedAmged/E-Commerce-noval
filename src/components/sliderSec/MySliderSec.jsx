import React from 'react'

import int1 from '../../assets/images/indterorDesigns/int1.jpg'
import int2 from '../../assets/images/indterorDesigns/int2.jpg'
import int3 from '../../assets/images/indterorDesigns/int3.jpg'
import Carousel from 'react-bootstrap/Carousel';


import  './mySliderSec.css'
import {  Link } from 'react-router-dom';


export default function MySliderSec() {
  return (
    <div className='container'>
      <div className="interorMadeSec">
        <div className="text">
          <h2>
            tailor-made <br /> interior like <br />  no other
          </h2>
          <p>
            Collection
          </p>
        </div>
        <div className="interorSlider mb-5">
          <Carousel interval={3000} fade={true} indicators={false}>
            <Carousel.Item>
                <img className='img-fluid d-block fixedHight' src={int1} alt="" />
              <Carousel.Caption >
              <h4>
                  <Link to={"/portofolio/" } className='nav-link'>
                      Houston private apartment interior	
                  </Link>
                </h4>
                <p>
                    <Link className='nav-link'>
                      Interior Design	
                    </Link>
                  </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='img-fluid d-block fixedHight' src={int2} alt="" /> 
              <Carousel.Caption  >
                <h4>
                  <Link to={"/portofolio/" } className='nav-link'>
                      Luxurious Custom Designed Pieces		
                  </Link>
                </h4>
                <p>
                    <Link className='nav-link'>
                      Interior Design	
                    </Link>
                  </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='img-fluid d-block fixedHight' src={int3} alt="" /> 
              <Carousel.Caption  >
                <h4>
                  <Link to={"/portofolio/" } className='nav-link'>
                      Every detail is important to us			
                  </Link>
                </h4>
                <p>
                    <Link className='nav-link'>
                      Interior Design	
                    </Link>
                  </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
