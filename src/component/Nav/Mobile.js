import { useState } from "react";
 
import Header from "./Nav";
import SideDrawer from "./Sidenav";
import styled from 'styled-components'

const Wrapper = styled.div`
height: 60px;
background-color:#0057FF !important ;
`
function Mobile() {
    const [showSideDrawer, setSideDrawer] = useState(false);
  
    const sideDrawerCloseHandler = () => {
      setSideDrawer(false);
    };
    const sideDrawerToggleHandler = () => {
      setSideDrawer(!showSideDrawer);
    };
    return (
      <Wrapper>
        <Header openSideDrawer={sideDrawerToggleHandler} />
        <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler} />
      </Wrapper>
    );
  }
  
  export default Mobile;
  