import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   background: #1b1b1b;
   height: 120vh;
`

const InnerContainer = styled.div`
  max-width: 900px;
  width: 100%;
  color: #ffffff;
  display: flex;
  font-family: 'Space Grotesk';
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: center;
  padding-top: 250px;
`
const Header = styled.div`
  font-size: 150px
`
const Paragraph = styled.div`
   width: 60%;
   text-align: center;
`
const Button = styled.button`
   margin-top: 40px;
   padding: 13px;
   width: 160px;
   font-family: 'Space Grotesk';
   font-size: 18px;
   background: #dc3433;
   color: #FFFFFF;
   border: 1px solid #dc3433;
   border-radius: 20px;
   outline: none;
   cursor: pointer;
   :hover{
       color: #dc3433;
       background: #ffffff;
       transition: all 0.6s ease;
   }
`

const Story = () => {
  return (
   <Container>
       <InnerContainer>
         <Header>NOT AFRAID</Header>
         <Paragraph>Revolutionizing the way sneakers are made while helping to take on climate change – not easy. See how we got started and why we're not afraid to keep changing the world.</Paragraph>     
         <Button>Our Story</Button>
       </InnerContainer>
   </Container>
  )
}

export default Story