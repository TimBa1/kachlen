

import styled from 'styled-components'

import menu from '../../assets/menu-icon.svg'



const StyledHeader = styled.header`
background-color: #0057FF ;
position: fixed;
width: 100%;
z-index: 999;
background: #0057FF ;
 text-decoration: none;
 color:white;
`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
padding: 20px 15px;
a{
  
}
`


const StyledNav = styled.nav`
  ${props => props.mobile ? `
    display: flex;
    flex-direction: column;
    padding:1rem 0;
    background: #0057FF ;
    margin-top:22%;
    height: 80%;
    width: 80%;
    color:green;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  color: white;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled.div`
color: white ;
text-decoration: none;
font-size: 18px;
letter-spacing: 1.44px;
cursor: pointer;
`
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const SideIcons = styled.div`
  display: flex;
  align-items: center;
  gap:15px;
  a{
    display:inline-block;
    min-width:20px;
    color:white;
    svg{
      width:14px;
      height:14px;
    }
  }
`;
const Name = styled.div`

  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight:700px;
`
function Header({ openSideDrawer }) {
  return (
    <StyledHeader >
      <Wrapper>

        <div style={{ display: "flex" }}>

          <Name>
            Kachlen-US
          </Name>
        </div>
        <StyledNav >
          <NavLink href={'/'}>Home</NavLink>
          <NavLink href={'/products'}>Shop</NavLink>
          <NavLink href={'/categories'}>Collections</NavLink>
          <NavLink href={'/about'}>About</NavLink>
        </StyledNav>

        <SideIcons>
          <div >
            Get the App
          </div>
          <NavButton onClick={openSideDrawer}>
            <img src={menu} alt='no-img' />
          </NavButton>
          {/* <NavLink href={'/account'}><Image src={acc} alt='acc' width='15' height='15' /></NavLink> */}
          {/* <NavLink href={'/cart'}><CartIcon /> ({cartProducts.length})</NavLink> */}


        </SideIcons>
      </Wrapper>
    </StyledHeader>
  )
}

export default Header