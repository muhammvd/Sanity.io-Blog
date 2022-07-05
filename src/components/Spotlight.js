import React from 'react'
import styled from 'styled-components'
import FlexImage1 from '../img/flex1-img.webp'
import FlexImage2 from '../img/flex2-img.webp'
import FlexImage3 from '../img/flex3-img.webp'

const Parallax = styled.div`
    height: 220vh;
`

const Flex1 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 970px;
    width: 90%;
    margin: auto;
    padding-bottom: 40px;
`

const FlexContent = styled.div`
  h4{
      color: #1b1b1b;
      padding-bottom: 20px;
      font-size: 22px;
      font-weight: 300;
  }
`
const Paragraph = styled.p`
     color: #1b1b1b;
     width:87%;
`
const FlexImage = styled.img`
  width: 1000px;
  margin-top: -30px;
`

const Button = styled.button`
  margin-top: 20px ;
  width: 150px;
  background: transparent;
  outline: none;
  padding: 14px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  color: #dc3433;
  font-weight: bold;
  font-family: 'Space Grotesk';
  border: 1px solid #dc3433;
   :hover{
       background: #dc3433;
       color: #ffffff;
       transition: all 0.4s ease-in-out;
   }
`
const Flex2 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 970px;
    width: 90%;
    margin: auto;
    padding-top: 80px; 
`
const Flex3 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 970px;
    width: 90%;
    margin: auto;
    padding-top: 120px; 
`

const FlexImageContainer = styled.img`
   width: 475px;
   margin-right: -50px;
`

const Paragraph1 = styled.p`
    width: 80%;
`

const Spotlight = () => {
  return (
      <Parallax className='parallax'>

         <Flex1>
             <FlexContent>
                 <h4>STEP INTO THE SPOTLIGHT</h4>
                 <Paragraph>Designed to do what others can’t, Unis sneakers meld forward-thinking, sustainability, and bold style so that you can make a statement with every step.</Paragraph>
                 <Button>Find Your Style</Button>
             </FlexContent>
             <FlexImage src={FlexImage1}></FlexImage> 
         </Flex1>

         <Flex2>
             <FlexImage src={FlexImage2} className="flex-image"></FlexImage> 
             <FlexContent className='flex-content'>
                 <h4>Wear The Future</h4>
                 <p className='flex-content-p-2'>Sprinter sneakers are unlike any shoe you’ve seen before. Never mass-produced, each pair is 3D printed into existence when you place your order, combining innovative design with cutting-edge technology to take the next step in sustainable fashion.</p>
                 <Button>Find Your Style</Button>
             </FlexContent>
         </Flex2>

         <Flex3>
             <FlexContent>
                 <h4>STAND FOR SUSTAINABILITY</h4>
                 <Paragraph1>We turn trash into prized possessions that you can wear and then recycle. Our sneakers help the Earth heal and put you in control of what you stand on, stand in, and stand for.</Paragraph1>
                 <Button>Check Our Blog</Button>
             </FlexContent>
             <FlexImageContainer src={FlexImage3}></FlexImageContainer> 
         </Flex3>
     
      </Parallax>
  )
}

export default Spotlight