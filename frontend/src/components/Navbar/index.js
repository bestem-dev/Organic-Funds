import React from "react";
import { Nav, NavbarContainer, NavLogo, MobileIcon,NavBtnLink, NavBtn} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import imagenes2 from "../Navbar/imagenes2";
import {useState} from "react";
import nav from "./nav.css";

const Navbar = ({toggle }) =>{
    
  const [isConnected, setIsConnected]= useState(false)
  const [walletAddress, setWallet] = useState('')

  const pressedConnectWallet = async () => {

    if(isConnected) return alert(
        "cuenta conectada: "+walletAddress
    )

    const walletResponse = await connectWallet()
    setIsConnected(walletResponse.connectedStatus)
    setWallet(walletResponse.address)

  }

  const connectWallet = async () => {
    if(window.ethereum){
      try{
        const address = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
        const object = {
          connectedStatus: true,
          status: 'La conexion ha sido un exito',
          address
        }

        return{
          connectedStatus: false,
          status: "error al conectar wallet"
        }

      } catch(err){

      }

    }else{
      return{
        connectedStatus: false,
        status: "Metamask is not instaled in browser"
      }
    }
  }

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
