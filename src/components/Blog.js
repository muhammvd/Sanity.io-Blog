import React from 'react'
import { useState, useEffect } from 'react'
import styled from "styled-components";  
import Header from './Header'
import client from '../client';

const Container = styled.div``
const Showcase = styled.div`
   margin-top:25px;
   padding-bottom: 50px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

const Blog = () => {

  const [ posts, setPosts] = useState([]);

  useEffect(()=>{
      client.fetch(
          `*[_type == 'posts' ]{
              title,
              body,
              slug,
              mainImage{
                  asset -> {
                      id,
                      url,
               },
            alt
              }
          }`
      ) .then((data)=> setPosts(data)).catch(console.error)


  }, [])

  return (
    <Container>
    <Header />
    <Showcase>
        <h1 style={{fontSize: '55px', fontWeight: '700', color: '#1b1b1b'}}>UNIS BLOG</h1>
       <p style={{color: '#1b1b1b',fontWeight: '500'}}>Stay Updated on our new releases and other industry buzz.</p>
    </Showcase>
    <h2>You are viewing {posts.map((post)=>
      console.log(post)
    )} posts</h2>
    </Container>
  )
}

export default Blog