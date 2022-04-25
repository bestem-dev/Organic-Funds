import React, { useState } from "react";
import { Button } from "../buttonElements";
import { ArrowForward, HeroP, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer,HeroContent} from "./HeroElements";
import imagenes from '../HeroSection/imagenes';
import Cards from '../Cards/Cards';
import { Link } from "react-router-dom";


const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return(
        
        <HeroContainer>
    
            <HeroBg>
                    <img src={imagenes.img1} id="img" />
            </HeroBg>
            <HeroContent>
            <HeroP>
                "A democratic decentralized crowdfunding platform for changing the future of funding."
            </HeroP>
            <HeroBtnWrapper>
                <Link to="/Contenido">
            <Button to="Product" onMouseEnter={onHover} onMouseLeave={onHover} 
            primary='true'
            dark='true'
            >SEARCH PRODUCTS {hover ? <ArrowForward /> : <ArrowRight />}</Button></Link>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

    )
}

export default HeroSection