import React from 'react'
import head from '../assets/home.jpg'
import styled from 'styled-components'

const Wrapper = styled.div`
position: relative;
`

const Container = styled.div`
width: 100%;
display:flex ;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
p{
  font-weight:600;
  line-height: 4rem;
  @media screen and (max-width: 768px){
font-size: 40px !important;
}
}

`
const New = styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
width:80%;
color:white;
font-size: 60px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
@media screen and (max-width: 768px){
  width:95%;
}
`
const Img = styled.img`
  height: 100vh;
  width: 100%;
  @media screen and (max-width: 768px){
height: 80vh;
object-fit: cover;
  }
`

const Button = styled.div`
width: 20%;
margin: auto;
background-color: #0057FF;
font-size: 25px;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 30px;
margin-top: 2rem; 
@media screen and (max-width: 768px){
  width:70%
}
`
const Header = () => {
  return (
    <Wrapper>
      <Img src={head} alt='' />
      <New>
        <Container>
          <div>
            <p> Welcome to Kachlen</p>
            <p> Your one stop store for all your merchandise</p>
          </div>
          <Button>
            SHOP NOW
          </Button>
        </Container>
      </New>
    </Wrapper>
  )
}

export default Header
