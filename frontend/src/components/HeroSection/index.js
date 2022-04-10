import React, { useState } from "react";
import { Button } from "../buttonElements";
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, Imagep,HeroContent} from "./HeroElements";
import imagenes from '../HeroSection/imagenes';

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
            <HeroBtnWrapper>
            <Button to="Product" onMouseEnter={onHover} onMouseLeave={onHover} 
            primary='true'
            dark='true'
            >Product {hover ? <ArrowForward /> : <ArrowRight />}</Button>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
