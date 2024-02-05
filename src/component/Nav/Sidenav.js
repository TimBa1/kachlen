import styled from "styled-components";
import Backdrop from "./Backdrop";


const NavLink = styled.a`
 color: white ;
 text-decoration: none;
 font-size: 18px;
 letter-spacing: 1.44px;
 cursor: pointer;
 `
const StyledNav = styled.nav`

/* ${props => props.show ? `
  display: flex;
  flex-direction: column;
  padding:1rem 0;
  
  margin-top:22%;
   
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
color: white; */
@media screen and (max-width: 768px) {
  /* display: none; */
  display:flex;
  flex-direction: column;
  margin:3rem 0 0 0;
  padding: 0;
  gap:1rem;

}
`;
const Wrapper = styled.div`

width: 80%;
height: 100%;
top: 0;
left: 0;
right: 0;
background:#0057FF ;
padding: 2rem 16px;
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
transition-property: transform;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 300ms;

position: fixed;
z-index: 999;
${props => props.show ? `transform: translateX(0px);` : `	transform: translateX(-100%);`}

 `

const SideDrawer = ({ open, closed }) => {
    return (
        <>
            <Backdrop show={open} clicked={closed} />
            <Wrapper show={open}>
                {/* <img src={logo}  alt=' no img' /> */}
                <StyledNav>
                    <NavLink href={'/'}>Home</NavLink>
                    <NavLink href={'/products'}>Shop</NavLink>
                    <NavLink href={'/categories'}>Collections</NavLink>
                    <NavLink href={'/about'}>About</NavLink>
                </StyledNav>
            </Wrapper>
        </>
    );
};

export default SideDrawer;
