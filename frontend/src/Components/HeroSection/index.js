import React, { useState } from "react";
import { Button } from "../buttonElements";
import { HeroBg, HeroContainer, HeroBtnWrapper, HeroContent } from "./HeroElements";


const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return(
        <HeroContainer>
            <HeroBg>
                <Image />
            </HeroBg>
            <HeroContent>
                <Heroh1>hola</Heroh1>
            <HeroBtnWrapper>
            <Button to="Product" onMouseEnter={onHover} onMouseLeave={onHover} 
            primary="true"
            dark='true'
            >Product</Button>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
