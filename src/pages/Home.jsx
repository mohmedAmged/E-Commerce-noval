import React from 'react'
import MyHeroSlider from '../components/MyHeroSlider'
import MySliderSec from '../components/sliderSec/MySliderSec'
import CardsHome from '../components/cardsHome/CardsHome'
import ShopHome from '../components/shopHome/ShopHome'
import NumberSec from '../components/numberHome/NumberSec'
import BannerVid from '../components/bannarVideo/BannerVid'
import ContactHome from '../components/contactHome/ContactHome'
import LastBannerHome from '../components/lastBannerHome/LastBannerHome'
import './home.css'

export default function Home() {
  return (
    <>
      <MyHeroSlider/>
      <MySliderSec/>
      <CardsHome/>
      <ShopHome/>
      <NumberSec/>
      <BannerVid/>
      <ContactHome/>
      <LastBannerHome/>
    </>
  )
}
