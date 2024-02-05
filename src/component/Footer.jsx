
import React from 'react'
import styled from 'styled-components'
import face from '../assets/facebook (1).png'
import twi from '../assets/twitter.png'
import what from '../assets/whatsapp.png'
 
 

const Wrapper = styled.div`
height: 538px;
background: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
@media screen and (max-width: 768px) {
    height: 100%;
    padding-top: 3rem;
}
`
const Container = styled.div`
width:85%;
margin: 0 auto;

`
const Div1 = styled.div`
display: flex;
gap: 40px;
margin-bottom: 2rem;
flex-direction: column;
  @media screen and (max-width: 768px) {
  gap:30px;
}
`
const Div2 = styled.div`
margin-bottom: 39px;
height: 1px;
background-color: white;
`
const Div3 = styled.div`
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 157.143% */
text-align: center;
`

const Container1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
div{
    display: flex;
    gap: 5px;
}
img{
    height: 24px;
    width: 24px;
}
`
 
const Container3 = styled.div`
gap: 15px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
div{
  font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 157.143% */

}
@media screen and (max-width: 768px) {
  width: 100%;
}
`
function Footer() {
    return (
        <Wrapper>
            <Container>
                <Div1>
                    <Container1>
                        <div>
                            <a href={'/'}>
                                {/* <Image src={logo} alt='' width={50} height={50} /> */}
                            </a>
                        </div>
                        <div style={{ margin: "45px 0" }}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit.
                        </div>
                        <div >
                            <span><img src={face} alt='img'/></span>
                            <span><img src={twi} alt='img'/></span>
                            <span><img src={what} alt='img'/></span>
                        </div>
                    </Container1>
                    
                    <Container3>

                        <div>
                            Customer Support
                        </div>
                        <div>
                            Delivery Details
                        </div>
                        <div>
                            Terms & Conditions
                        </div>
                        <div>
                            Privacy Policy
                        </div>
                    </Container3>
                   
                </Div1>
                <Div2>

                </Div2>
                <Div3 >
                    © Copyright 2022, All Rights Reserved by ClarityUI
                </Div3>
            </Container>
        </Wrapper>
    )
}

export default Footer