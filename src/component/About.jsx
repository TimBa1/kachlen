import React from 'react'
import styled from 'styled-components'
function About() {
  const Head = styled.div`
     font-weight: 700;
    font-size: 27px;
    margin-bottom: 3rem;
    `
  const Body = styled.div`
    font-weight: 600;
    font-size: 19px;
    width: 70%;
    margin:0 auto;
    @media screen and (max-width: 768px){
    width:90%;
    text-align: center;
}
    `
  const Container = styled.div`
  height: 60vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0057FF ;
    color: white;
    `
  const Bod = styled.div`
    
    `

  return (
    <Container>
      <Head>
        About Us
      </Head>
      <Body>
        Kachelan LLC, a dynamic e-commerce enterprise, strives to revolutionize customer experience through a diverse array of products.
        We seamlessly integrate comfort and captivating style, creating a unique fusion of coziness and charm.
        Each purchase at Kachelan LLC is a deliberate step toward crafting inviting and visually appealing spaces.
      </Body>
    </Container>
  )
}

export default About