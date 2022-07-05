import React from 'react'
import { useState, useLayoutEffect } from 'react'
import styled from 'styled-components'
import Model2 from '../img/model-2.webp'
import Bottle from '../img/bottle.webp'
import Thread from '../img/thread.webp'
import Shoes from '../img/jumpshoes.webp'
import Yeezy from '../img/yeezy.webp'
import ModelShoe from '../img/shoesphoto.webp'

const Container = styled.div`
   background: #1b1b1b;
   height: 325vh;
   color: #Ffffff;
`
const FirstSection = styled.div`
   padding-top: 12rem;
   margin: auto;
   font-family: 'Space Grotesk';
   max-width: 1100px;
   width: 100%;
`

const Header = styled.div`
   font-size: 70px;
   color: #dc3433;
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HeaderFlex = styled.div`
    font-size: 70px;
    margin-left: 60px;
    margin-top: -20px;
`
const Button = styled.button`
   margin-top: 20px ;
  width: 150px;
  background: #dc3433;
  outline: none;
  padding: 12px;
  border-radius: 20px;
  font-size: 15px;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Space Grotesk';
  border: 1px solid #dc3433;
   :hover{
       background: #ffffff;
       color: #dc3433;
       transition: all 0.4s ease-in-out;
   }
`

const SecondSection = styled.div`
   padding-top: 3rem;
   margin: auto;
   font-family: 'Space Grotesk';
   max-width: 1100px;
   width: 100%;
   display: flex;
   justify-content: space-between;
`
const ImageContainer = styled.div`
  height: 223vh;
  background: #1b1b1b;
  position: relative;
`
const Image = styled.div``
const SectionRight = styled.div`
`
const FlexNumber = styled.div`
   display: flex;
   align-items: center;
   margin-top: 20px;
   margin-bottom: 20px;
`
const Number = styled.div`
   color: #dc3433
`
const Border = styled.div`
  width: 40px;
  height: 1px;
  background: #dc3433;
  margin-left: 275px
`
const TitleFlex = styled.div`
  display: flex;
  justify-content: space-between;
`
const Subject = styled.div`
  font-size: 23px;
`
const Content = styled.div` 
  width: 55%;

` 
const Line = styled.div`
   border-top: 1px solid rgb(100, 95, 95);
   border-bottom: 1px solid rgb(100, 95, 95);
   height: 230px;
`

const Features = () => {
    const [Styles, setStyles] = useState({});
    const [Styles1, setStyles1] = useState({});
    const [Styles2, setStyles2] = useState({});
    const [Styles3, setStyles3] = useState({});
    const [Styles4, setStyles4] = useState({});
    const [Styles5, setStyles5] = useState({});
    const [Background, setBackground] = useState({});

    useLayoutEffect(()=>{
        window.onscroll = function() {
            const position = window.scrollY;
            //Image One 
            if(position >= 3754){
                setBackground({
                    background: `url(${Model2})  no-repeat center center/cover`,
                    width: 398,
                    height: 266
                })
                setStyles({
                    color: '#555'
                })
            } else if(position <= 3880){
               setStyles({
                   color : '#fff'
               })
            }
            //Image Two
            if(position >= 3774){
                setBackground({
                    background : `url(${Bottle})  no-repeat center center/cover`
                })
                setStyles1({
                    color : '#fff'
                })
            } else if(position <= 3774){
                 setStyles1({
                    color : '#555'
                })
            }
            //Image Three 
            if(position >= 3974){
                setBackground({
                    background : `url(${Thread})  no-repeat center center/cover`
                })
                setStyles1({
                    color : '#555'
                }) 
                setStyles2({
                    color : '#fff'
                })
            } else if(position <= 3974){
                 setStyles2({
                    color : '#555'
                }) 
            }
            //Image Four
            if(position >= 4258){
                setBackground({
                    background : `url(${Shoes})  no-repeat center center/cover`
                })
                setStyles2({
                    color : '#555'
                }) 
                setStyles3({
                    color : '#fff'
                })
            } else if(position <= 4258){
                 setStyles3({
                    color : '#555'
                }) 
            }
            //Image Five 
            if(position >= 4458){
                setBackground({
                    background : `url(${ModelShoe})  no-repeat center center/cover`
                })
                setStyles3({
                    color : '#555'
                }) 
                setStyles4({
                    color : '#fff'
                })
            } else if(position <= 4458){
                 setStyles4({
                    color : '#555'
                }) 
            }
            //Image Six
            if(position >= 4694){
                setBackground({
                    background : `url(${Yeezy})  no-repeat center center/cover`
                })
                setStyles4({
                    color : '#555'
                }) 
                setStyles5({
                    color : '#fff'
                })
            } else if(position <= 4694){
                 setStyles5({
                    color : '#555'
                }) 
            }
        };
    }, [])

  return (
   <Container>
       <FirstSection>
           <Header>GREATNESS</Header>
           <HeaderWrapper>
              <HeaderFlex>IN THE MAKING</HeaderFlex>
              <Button>Shop Shoes</Button>
           </HeaderWrapper>
       </FirstSection>

       <SecondSection>
           <ImageContainer>
               <Image className='featureImage' style={Background}></Image>
           </ImageContainer>
           <SectionRight>

               <Line>
               <FlexNumber>
                   <Number>01</Number>
                   <Border></Border>
             </FlexNumber>
               <TitleFlex>
                   <Subject className='default' style={Styles}>MADE TO ORDER</Subject>
                   <Content className='default' style={Styles}>As soon as you place your order we get to work, assembling your sneakers from scratch.</Content>
               </TitleFlex>
               </Line>

               <Line>
               <FlexNumber>
                   <Number>02</Number>
                   <Border></Border>
               </FlexNumber>
               <TitleFlex>
                   <Subject className='default gray' style={Styles1}>WAVES WITHOUT <br></br> WASTE</Subject>
                   <Content  className='default gray' style={Styles1}>Plastic waste collected from our oceans form the raw material for our unique sneakers.</Content>
               </TitleFlex>
               </Line>

               <Line>
               <FlexNumber>
                   <Number>03</Number>
                   <Border></Border>
               </FlexNumber>
               <TitleFlex>
                   <Subject style={Styles2} className='default gray'>RECONSTRUCTING RECYCLABLES</Subject>
                   <Content style={Styles2} className='content-3 default gray'>The plastic bottles we collect are shredded and spun into soft plastic thread, used to 3D knit the multi-colored uppers.</Content>
               </TitleFlex>
               </Line>

               <Line>
               <FlexNumber>
                   <Number>04</Number>
                   <Border></Border>
               </FlexNumber>
               <TitleFlex>
                   <Subject style={Styles3} className='default gray'>ASSEMBLE & SHIP</Subject>
                   <Content style={Styles3}  className='default gray'>The three components are then assembled by hand right here in the USA, just outside of Pittsburgh. They’re checked for perfection, then laced up and shipped out.</Content>
               </TitleFlex>
               </Line>

               <Line>
               <FlexNumber>
                   <Number>05</Number>
                   <Border></Border>
               </FlexNumber>
               <TitleFlex>
                   <Subject style={Styles4} className='default gray'>NEXT STOP: YOU</Subject>
                   <Content style={Styles4} className='default gray'>Even the box your sneakers arrive in is recyclable. Pull out your new shoes, try them out with your wardrobe, then fold down the box to be turned into something else.</Content>
               </TitleFlex>
               </Line>

               <Line>
               <FlexNumber>
                   <Number>06</Number>
                   <Border></Border>
               </FlexNumber>
               <TitleFlex>
                   <Subject style={Styles5} className='default gray'>STYLE <br></br> REINCARNATED</Subject>
                   <Content style={Styles5} className='default gray'>When your sneakers wear out, send us your original order number at info@unisbrands.com. We'll get back to you with a 20% discount on a new pair and a shipping label so you can send the old ones in to be recycled.</Content>
               </TitleFlex>
               </Line>

           </SectionRight>
       </SecondSection>

   </Container>
  )
}

export default Features