import React from "react";
import { Nav, NavbarContainer, NavLogo, MobileIcon,NavBtnLink, NavBtn} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import imagenes2 from "../Navbar/imagenes2";
import nav from "./nav.css";

const Navbar = ({toggle }) =>{
    return(
        <>
        <Nav id="nav">
            <NavbarContainer>

                <NavLogo to='/'>
                    <img src={imagenes2.img2} id="img2" /></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                {/* <NavMenu>
                    <NavItem>
                        <NavLinks to="Products">Products</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Products">Products</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Products">Products</NavLinks>
                    </NavItem> 
                </NavMenu> */}
                <NavBtn>
                    <NavBtnLink to="/metamask">
                        Connect metamask</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>  
        </>
    )
}

export default Navbar;