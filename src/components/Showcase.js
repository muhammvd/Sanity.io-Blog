import React from 'react'
import styled from 'styled-components'
import Texture from '../img/texture.png'
import Shoe from '../img/showcase-shoes.png'
import { useState } from 'react'

const ShowcaseContainer = styled.div`
   max-width: 1000px;
   width: 100%;
   margin: auto;
   height: 188vh;
   display: flex;
   justify-content: space-evenly;
`
const FirstDiv = styled.div`
    position: relative
`

const ImageContainer = styled.img`
   margin-top: 50px;
   border-radius: 50%;
   max-width: 450px;
`

const ShoeImage = styled.img`
   position: absolute;
   max-width: 500px;
   transform: translate(-50%,-50%) rotate(-30deg) scale(1);
   opacity: 1;
   transition: opacity .2s linear,transform 2s cubic-bezier(.19,1,.22,1);
   top: 20%;
   left: 45%;
   user-select: none;
`

const SecondDiv = styled.div`
`

const BottomLine = styled.div`
    background: #c1c1c1;
    height: 2px;
    width: 320px;
    margin-top: 30px;
    margin-left: 50px
`

const Paragraph = styled.p`
    width:50%;
`

const Showcase = () => {
  return (
    <ShowcaseContainer>
        <FirstDiv>
            <ImageContainer  src={Texture} className='rotate'></ImageContainer>
            <ShoeImage src={Shoe}></ShoeImage>       
        </FirstDiv>
        <SecondDiv>
            <div className='showcase-font'>
             <div>THE NEW</div>
             <div className='sprinter'>SPRINTER</div>
             <div className='sneaker'>SNEAKER</div>
             <div className='collection'>COLLECTION</div> 
             </div>
             <BottomLine></BottomLine>
             <Paragraph className='paragraph'>
             The Sprinter Collection continues to push the limits of our 3D printing and knitting powers, introducing flex-wear technology for the next step in comfort and durability.
             </Paragraph>
        </SecondDiv>
    </ShowcaseContainer>
  )
}

export default Showcase