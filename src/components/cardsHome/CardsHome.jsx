import React, { useEffect } from 'react'
import "@splidejs/react-splide/css";

import "./CardsHome.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller } from 'swiper/modules'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/slices/singlePageData'

export default function CardsHome() {
    const dispatche = useDispatch()
    const { products } = useSelector(state => state.productReducer)
    console.log(products);
    useEffect(() => {
        dispatche(getData())
    }, [dispatche])

    return (
        <div className=' cardSlider container'>
            <div className="cardSliderTitle">
                <div className="text">
                    <p>
                        New Pieces
                    </p>
                    <h2>
                        chic and unique pieces <br />  for your workspace
                    </h2>
                </div>
            </div>
            <Swiper
                modules={[Autoplay, Controller]}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={25}
                slidesPerView={5}
                centeredSlides={true}
                loop={true}
                lazyPreloadPrevNext={true}
                parallax={true}
                className='p-0 carouselSectionMainSwiper'
            >
                {
                    products?.slice(0, 16).map((card) => (
                        <SwiperSlide className='carouselSectoinSwiperContent p-1'>
                            <div className="cardItem">
                                <img className='w-100 p-0' src={card.thumbnail} alt="card-img" />
                                <div className="overlay"></div>
                                <div className="overlayText">
                                    <h2>
                                        {card.title}
                                    </h2>
                                    <p>
                                        {card.subTitle}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))

                }


            </Swiper>
        </div>
    )
}
