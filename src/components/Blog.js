import React from 'react'
import { useState, useEffect } from 'react'
import styled from "styled-components";  
import { Link } from 'react-router-dom';
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
const Flex = styled.div`
   margin: auto;
   max-width: 1200px;
   width: 90%;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap: 35px;
`

const Blog = () => {

  const [ posts, setPosts] = useState([]);

  useEffect(()=>{
      client.fetch(
          `*[_type == 'post' ]{
              title,
              slug,
              body,
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
    <section>
       <Container>
    <Header />
    <Showcase>
        <h1 style={{fontSize: '55px', fontWeight: '700', color: '#1b1b1b'}}>UNIS BLOG</h1>
       <p style={{color: '#1b1b1b',fontWeight: '500'}}>Stay Updated on our new releases and other industry buzz.</p>
    </Showcase>
    <h2>You are viewing {posts.length} posts</h2>
    </Container>
    <Flex>
      {posts.map(post => 
         <article  key={post.slug.current}>
           <img style={{width: '380px', height: '200px', objectFit: 'cover'}} src={post.mainImage.asset.url} alt={post.title}/>
           <h4 style={{fontSize:'16px', marginTop:'10px', marginBottom:'10px'}}>{post.title}</h4> 
           <Link to={`/blog/${post.slug.current}`}>Read Full Article</Link>
         </article>      
        )}
    </Flex>
    </section>
  )
}

export default Blog