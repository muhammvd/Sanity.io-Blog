import React from 'react'
import styled from 'styled-components'
import White from '../img/unis-white-logo.png'
import CEO from '../img/CEO.webp'
import AboutModel from '../img/about-model.webp'
import WhiteShoe from '../img/white-shoe.webp'
import { Link } from 'react-router-dom'
import Blob from './Blob'
import Footer from './Footer'

const Container = styled.div`
  background: #1b1b1b;
`
const OuterHeader = styled.div`
 background: #1b1b1b;
 border-bottom: 1px solid rgba(151,151,151,.15);
  z-index: 10;
  position: sticky;
  top: 0;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 1200px;
  width: 90%;
  padding-top: 10px;
  padding-bottom: 10px;
`
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`
const Li = styled.li`
   color: white;
   list-style: none;
   list-style: none;
   margin-left: 10px;
   margin-right: 10px;
   font-size: 13px;
   cursor: pointer;
   color: #ffffff;
   font-weight: bolder;
`
const ShowcaseContent = styled.div`
  z-index: 5;
  margin-top: 20px;
  margin-left: 150px;
 
`
const AboutShowcase = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-contet: center;
`
const CEOShowcase =  styled.div`
     display: flex;
     justify-content: space-between;
     align-center: center;
     margin-top: 150px;
     margin-left: 110px;
`
const CEOContent = styled.div`
    padding-right: 130px;
    padding-top: 30px;
    margin-left: 50px;
`

const CeoName = styled.div``

const Story = styled.div`
    margin-top: 60px;
    margin-bottom: 150px;
`

const StoryParagraph = styled.div``

const StoryImage = styled.div``

const WhiteSpace = styled.div`
   height: 60vh;
   background: white;

`

const About = () => {
  return (
    <Container>
      <OuterHeader  >
      <HeaderContainer>
     <Link to='/'> <img src={White} style={{cursor: 'pointer'}} /></Link>
        <HeaderContent>
         <Li> <Link to='/about' style={{textDecoration: 'none', color:'#fff'}}>OUR STORY</Link></Li>
         <Li><Link to='/blog' style={{textDecoration: 'none', color:'#fff'}}>BLOG</Link></Li>
        </HeaderContent>
      </HeaderContainer>
      </OuterHeader>
      <AboutShowcase>
        <ShowcaseContent>
          <h2 className='our-story'>OUR STORY</h2>
          <h1 className='we-stand'>WE STAND</h1>
          <h1 className='in-what-we'>IN WHAT WE</h1>
          <h1 className='stand-for'>STAND FOR</h1>
          <p className='paragraph'>There are a lot of things wrong with the world right now, but no generation has ever been better equipped to solve the problems.</p>
        </ShowcaseContent>
        <img src={AboutModel} style={{width: '745px', height: '650px', objectFit: 'contain', marginRight: '80px'}} />
      </AboutShowcase>
      <CEOShowcase>
          <img src={CEO} className='ceo-image' />
          <CEOContent>
            <CeoName>
              <h1 className='the'>THE</h1>
              <h1 className='founder'>FOUNDER</h1>
              <h1 className='nick'>NICK</h1>
              <h1 className='unis'>UNIS</h1>
            </CeoName>
            <p className='ceo-story'>Nick Unis was an 18-year-old freshman at Penn State when he started his own business. Passionate about shoes, he bought designer sneakers, cut them apart, remade and sold them. He collaborated with rapper Riff Raff to create a pair that would earn him a million-dollar auction bid. Unfortunately, that caught the attention of the world’s most popular shoe brand, whose lawyers asked him to cease and desist. But it wasn’t long before he’d try again. <br></br> <br></br>

            Nick was working in a shoe store and saw that the shoes people were buying weren’t the best fit for their feet. He borrowed some 3D printers from his university and designed a program that would make custom shoes based on the exact contours of an individual’s unique foot. After much work, he came up with a prototype, but the plastic uppers were uncomfortable and the execution was too complicated.</p>
           <p className='failed'>THE BUSINESS IDEA FAILED</p>
          </CEOContent>
       </CEOShowcase>
       <Story>
         <StoryParagraph>
         <h2 style={{paddingBottom: '15px',paddingTop: '70px', color: '#dc3433', textAlign: 'left', fontSize: '14px'}} className="storyParagraph">THEN HE HAD ANOTHER IDEA</h2> 
           <p className='storyParagraph'>
             Deeply aware of climate change issues, and motivated to try and make a difference, he investigated the use of recycled plastic bottles in creating shoes. Using his 3D printers, he figured out how to make the midsoles out of rPET, but the uppers were a problem – they needed to be comfortable. He went to Hong Kong and connected with another youth who had a patent on 3D knitting. The technology worked beautifully and Nick found what he needed to launch Unis, a 3D printed fashion sneaker line that was good looking, good fitting, and good for the environment.
             <br></br><br></br> 
             Now, Nick knows that our generation has the power to conquer whatever we set out to accomplish.
           </p>
         </StoryParagraph>
         <StoryImage>
           <img src={WhiteShoe} className='white-shoe' />
         </StoryImage>
       </Story>
       <Blob />
       <WhiteSpace></WhiteSpace>
       <Footer />
    </Container>
  )
}

export default About