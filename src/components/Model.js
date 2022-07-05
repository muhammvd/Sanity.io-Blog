import React from 'react'
import styled from 'styled-components'
import ModelPic from '../img/model-1.webp'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
`

const ModelPicture = styled.img`
  width: 1184px;
  height: 750px;
  object-fit: cover;
  position: absolute;
  top: 110%;
`

const Model = () => {
  return (
      <Container>
           <ModelPicture src={ModelPic}></ModelPicture>
      </Container>
  )
}

export default Model