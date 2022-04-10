import React from "react";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavBtnLink, NavBtn} from './NavbarElements';
import {FaBars} from 'react-icons/fa';

const Navbar = ({toggle }) =>{
    return(
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Logo </NavLogo>
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
                    <NavBtnLink to="/metamask">metamask</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>  
        </>
    )
}

export default Navbar;