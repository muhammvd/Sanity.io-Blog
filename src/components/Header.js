import React from 'react'
import styled from "styled-components";  
import logo from '../img/Logo.svg'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const BigHeader = styled.header`
   padding: 15px;
   z-index: 2;
   position: sticky;
   top: 0;
`

const Container = styled.div`
    font-size: 20px;
    margin: auto;
    max-width: 1200px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(151,151,151,.15);
`

const Image = styled.img`
   width: 35px;
`

const Ul = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const Li = styled.li`
   list-style: none;
   margin-left: 10px;
   margin-right: 10px;
   font-size: 13px;
   cursor: pointer;
   color: #6E7A89;
   font-weight: bolder;
`

const Header = () => {
   const [ Styles, setStyles ] = useState({});
   const [ BorderLine, setBorderLine ] = useState({});
   const handleScroll = () => {
      const position = window.pageYOffset;
      if(position >= 100 ){
         setStyles({
            background: 'white'  
         })
         setBorderLine({
            border: 'none'
         })
      } else if(position <= 100){
         setStyles({
            background: 'transparent'
         })

         setBorderLine({
            borderBottom: '1px solid  rgba(151,151,151,.15)'
         })
      }
   };

   useEffect(()=>{
      window.addEventListener('scroll', handleScroll);
      return () =>{
         window.removeEventListener('scroll', handleScroll);
      };
   }, [])

  return (
  <BigHeader style={Styles}>
    <Container style={BorderLine}>
        <Link to='/'> <Image src={logo}></Image></Link> 
      <Ul>
         <Li> <Link to='/about' style={{textDecoration: 'none', color:'#6E7A89'}}>OUR STORY</Link></Li>
         <Li> <Link to='/blog' style={{textDecoration: 'none', color:'#6E7A89'}}>BLOG</Link></Li>
      </Ul>
     </Container>
  </BigHeader>
  )
}

export default Header