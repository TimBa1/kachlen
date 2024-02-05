import React from 'react'
import styled from 'styled-components'
import item from '../assets/1.png'
import i2 from '../assets/12.png'
import i3 from '../assets/Asset 2.png'
import i4 from '../assets/Asset 3.png'
import i5 from '../assets/Asset 4.png'
import i6 from '../assets/Asset 5.png'
import i7 from '../assets/Asset 6.png'
import i8 from '../assets/WhatsApp Image 2024-02-05 at 00.46.32_dbe3f17e.jpg'
import i9 from '../assets/WhatsApp Image 2024-02-05 at 00.46.43_e6f61061.jpg'
import i10 from '../assets/WhatsApp Image 2024-02-05 at 00.46.50_4f03d5e5.jpg'

const Wrapper = styled.div`
margin-top: 3rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
width:80%;
gap:20px;
margin:0 auto;
@media screen and (max-width: 768px){
flex-wrap: nowrap;
width:90%;
overflow: auto;
}
`
const Head = styled.div`
   font-weight: 700;
    font-size: 35px;
    margin-bottom: 3rem;
`
const Card = styled.div`
width:20%;
padding: 20px;
box-shadow: 3px 7px #888888;
border-radius: 10px;
height:fit-content;
border:1px solid black;
@media screen and (max-width: 768px){
min-width: 80%;
margin-left: 5rem;
}
img{
    object-fit: cover;
    height:280px;
    
    &:hover{
    transform: scale(1.05);
    transition: 1s ease-in-out;
    
}
}
`

function Collections() {
    const data = [{ img: item }, { img: i2 }, { img: i3 }, { img: i4 }, { img: i5 }, { img: i6 }, { img: i7 }, { img: i8 }, { img: i9 }, { img: i10 },]
    return (
        < Wrapper>
            <Head>Our Collections</Head>
            <Container>
                {data.map((props) => (
                    <Card key={props}>
                        <div>
                            <img src={props.img} alt='no-img' />
                        </div>
                        <div>

                        </div>
                    </Card>
                ))

                }
            </Container>
        </Wrapper>

    )
}

export default Collections