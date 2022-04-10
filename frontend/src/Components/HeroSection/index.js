import React, { useState } from "react";
import { Button } from "../buttonElements";
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroH1, Imagep,HeroContent} from "./HeroElements";



const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return(
        <HeroContainer>
            <HeroBg>
                <Imagep>
                 
                </Imagep>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Product
                </HeroH1>
            <HeroBtnWrapper>
            <Button to="Product" onMouseEnter={onHover} onMouseLeave={onHover} 
            primary="true"
            dark='true'
            >Product {hover ?<ArrowForward /> : <ArrowRight />}</Button>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
