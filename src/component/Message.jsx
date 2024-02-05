import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
margin-top: 4rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #0057FF;
height:60vh;
color:white;
@media screen and (max-width: 768px){
height: 45vh;
}
`
const Head = styled.div`
   font-weight: 700;
    font-size: 35px;
    margin-bottom: 3rem;
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width:50%;
gap:20px;
margin:0 auto;
@media screen and (max-width: 768px){
width:90%;
}
`
const Input = styled.input`
width:100%;
border-radius: 5px;
height: 30px;
padding: 10px;
@media screen and (max-width: 768px){
height: 40px;
}
`
const Text = styled.textarea`
width:100%;
border: 2px solid #0057FF;
border-radius: 5px;
height: 70px;
padding: 10px;
@media screen and (max-width: 768px){
height: 100px;
}
`

export default function Message() {
  return (
    <Wrapper>
        <Head> Leave us a message</Head>
        <Container>
            <Input type="text" placeholder='Name'/>
            <Input type="email" placeholder='Email'/>
            <Text type="text" placeholder='Leave a message' col='8'/>

        </Container>
    </Wrapper>
  )
}
