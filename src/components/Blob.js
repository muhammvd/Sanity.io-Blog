import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import Slider1 from '../img/Slider1.webp'
import Slider2 from '../img/Slider2.webp'
import Slider3 from '../img/Slider3.webp'
import Slider4 from '../img/Slider4.webp'


const OuterContainer = styled.div`
   background: #1b1b1b;
   height: 80vh;
   margin-top: -80px;
`

const Container = styled.div`;
   color: #Ffffff;
   margin-top: -4rem;
   font-family: 'Space-Grotesk' ;
   margin: auto;
   max-width: 1250px;
   width: 100%;
   position: relative;
`
const FirstSection = styled.div`
   margin: auto;
   font-family: 'Space Grotesk';
   max-width: 1150px;
   width: 100%;
`

const Header = styled.div`
   font-size: 65px;
   color: #ffffff;
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HeaderFlex = styled.div`
    font-size: 70px;
    margin-left: 25rem;
    margin-top: -20px;
    color: #dc3433;
`

const Blob = () => {
    
  return (
    <OuterContainer>
    <Container>
    <FirstSection>
      <Header>SPRINTER SHOES</Header>
       <HeaderWrapper>
         <HeaderFlex>IN ACTION</HeaderFlex>
     </HeaderWrapper>
   </FirstSection>
     <Swiper
           slidesPerView={1.3}
           spaceBetween={80}
           className="mySwiper"
      >
       <SwiperSlide><img src={Slider1}></img></SwiperSlide>
       <SwiperSlide className='pic2'><img src={Slider2}></img></SwiperSlide>
       <SwiperSlide><img src={Slider3}></img></SwiperSlide>
       <SwiperSlide><img src={Slider4}></img></SwiperSlide>
    </Swiper>

   </Container>
   </OuterContainer>
  )
}

export default Blob