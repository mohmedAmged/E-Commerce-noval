import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, } from 'swiper/modules';
import sofa2 from "../assets/images/sofa/sofa2.jpg";
import sofa1 from "../assets/images/sofa/sofa1.jpg";
import sofa5 from "../assets/images/sofa/sofa5.jpg";
import table1 from "../assets/images/table/table1.jpg";
import table2 from "../assets/images/table/table2.jpg";
import table3 from "../assets/images/table/table3.jpg";
import light1 from "../assets/images/lights/light1.jpg";
import light2 from "../assets/images/lights/light2.jpg";
import light3 from "../assets/images/lights/light3.jpg";
import art1 from "../assets/images/art/art1.jpg";
import art2 from "../assets/images/art/art2.jpg";
import art3 from "../assets/images/art/art3.jpg";
import kitchen1 from "../assets/images/kitchen/kitchen1.jpg";
import kitchen2 from "../assets/images/kitchen/kitchen2.jpg";
import kitchen3 from "../assets/images/kitchen/kitchen3.jpg";


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './myHeroSlider.css'

export default function MyHeroSlider() {

    return (
        <div className='my-4 container-fluid heroSliderSec'> 
            <Swiper
                spaceBetween={0}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <div className="">
                        <div className='sliderContainer px-5 row justify-content-around align-items-center'>
                            <div className="SliderImg d-flex align-items-center  col-3">
                                <img className=' img-fluid hightAdgust' src={sofa2} alt="" />
                            </div>
                            <div className="SliderImg col-4 ">
                                <img className=' img-fluid hightAdjust2' src={sofa1} alt="" />
                            </div>
                            <div className="SliderImg d-flex align-items-center  col-3 ">
                                <img className=' img-fluid hightAdgust' src={sofa5} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="heroSliderSec">
                        <div className='sliderContainer px-5 row justify-content-around align-items-center'>
                            <div className="SliderImg d-flex align-items-center  col-3">
                                <img className=' img-fluid hightAdgust' src={table1} alt="" />
                            </div>
                            <div className="SliderImg col-4 ">
                                <img className=' img-fluid hightAdjust2' src={table2} alt="" />
                            </div>
                            <div className="SliderImg d-flex align-items-center  col-3 ">
                                <img className=' img-fluid hightAdgust' src={table3} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="heroSliderSec">
                        <div className='sliderContainer px-5 row justify-content-around align-items-center'>
                            <div className="SliderImg d-flex align-items-center  col-3">
                                <img className=' img-fluid hightAdgust' src={light1} alt="" />
                            </div>
                            <div className="SliderImg col-4 ">
                                <img className=' img-fluid hightAdjust2' src={light2} alt="" />
                            </div>
                            <div className="SliderImg d-flex align-items-center  col-3 ">
                                <img className=' img-fluid hightAdgust' src={light3} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="heroSliderSec">
                        <div className='sliderContainer px-5 row justify-content-around align-items-center'>
                            <div className="SliderImg d-flex align-items-center  col-3">
                                <img className=' img-fluid hightAdgust' src={art1} alt="" />
                            </div>
                            <div className="SliderImg col-4 ">
                                <img className=' img-fluid hightAdjust2' src={art2} alt="" />
                            </div>
                            <div className="SliderImg d-flex align-items-center  col-3 ">
                                <img className=' img-fluid hightAdgust' src={art3} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="heroSliderSec">
                        <div className='sliderContainer px-5 row justify-content-around align-items-center'>
                            <div className="SliderImg d-flex align-items-center  col-3">
                                <img className=' img-fluid hightAdgust' src={kitchen1} alt="" />
                            </div>
                            <div className="SliderImg col-4 ">
                                <img className=' img-fluid hightAdjust2' src={kitchen2} alt="" />
                            </div>
                            <div className="SliderImg d-flex align-items-center  col-3 ">
                                <img className=' img-fluid hightAdgust' src={kitchen3} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="textSlider ">
                <p className='tit titOne'>
                    new
                </p>
                <p className='descr descrOne'>
                    collection
                </p>
            </div>
        </div>
    )
}
