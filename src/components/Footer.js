import React from 'react'
import styled from 'styled-components'
import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'

const FooterContainer = styled.div`
   height: 100vh;
   background: #1b1b1b;
`
const FooterContainerInner = styled.div`
   margin: auto;
   max-width: 1100px;
   width: 90%;
`

const Paragraph = styled.div`
  color: #dc3433;
  padding-top: 100px;
  font-size: 15px;
  font-weight: 300;
`

const Email = styled.div`
   font-size: 40px;
   color: #ffffff;
   font-family: 'Space Grotesk';
   margin-top: 40px;
   text-decoration: underline;
`

const Phone = styled.div`
   font-size: 40px;
   margin-top: 2px;
   color: #ffffff;
   font-family: 'Space Grotesk';
   text-decoration: underline;
`

const Address = styled.div`
    color: #ffffff;
    margin-top: 20px;
    font-size: 18px;
    font-family: 'Space Grotesk';
`

const Subscribe  = styled.div`
    color: #FFFFFF;
    font-size: 18px;
 `

 const SubscribeContainer = styled.div`
    margin-left: 120px;
    margin-top: 40px;
    font-size: 18px;
    font-family: 'Space Grotesk';
 `

 const SubscribeInput = styled.input`
    font-size: 18px;
    padding: 5px;
    font-family: 'Space Grotesk';
    width: 80%;
    background: #1b1b1b;
    border: unset;
    outline: none;
    color: #ffffff;
 `

 const SubscribeInputContainer = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 400px;
     border-radius: 4px;
     padding: 10px;
     border-bottom: 2px solid #ffffff;
     margin-top: 10px;
 `

 const Button = styled.button`
     background: #1b1b1b; 
     color: #ffffff;
     font-size: 18px;
     border: unset;
     cursor: pointer;
     :hover{
         color: #dc3433;
         transition: all 0.4s ease;
     }    
 `

 const FooterEnd = styled.div`
     margin-top: 90px;
     color: #ffffff;
     font-size: 12px;
     text-align: center;
 `

 const SubContainer = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
 `
 const Subflex2 = styled.div``
 const Image = styled.img`
     margin-right: 20px;
     cursor: pointer;
     width: 30px;
 `
 const Insta = styled.img`
      cursor: pointer;
     width: 30px;
 `

const Footer = () => {
  return (
      <FooterContainer>
          <FooterContainerInner>
          <Paragraph>GET IN TOUCH</Paragraph>
          <Email>Info@sprintsneakers.com</Email>
          <Phone>+01-45-67-65-54</Phone>
          <Address>20072, Broadhead Road, Dummy State.</Address>
          <SubscribeContainer>
            <Subscribe>Get the latest on new drops, deals, and other <br></br> Unis developments sent straight to your inbox.</Subscribe>
            <SubContainer>
             <SubscribeInputContainer>
                <SubscribeInput />
                <Button>Sign Up</Button>
             </SubscribeInputContainer>
             <Subflex2>
                    <Image src={Facebook}/>
                    <Insta src={Instagram} />
                </Subflex2>
            </SubContainer>
          </SubscribeContainer>
          <FooterEnd>All rights reserved ©2022</FooterEnd>
          </FooterContainerInner>
      </FooterContainer>
  )
}

export default Footer