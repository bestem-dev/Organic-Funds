import styled from "styled-components";
import { MdArrowForward, MdArrowRight } from 'react-icons/md';


export const HeroContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 38px;
    height 557px;
    position: relative;
    
    
    :before{
        content: '';
        position: absolute;
        top: 0;
        left:0;
        right: 0;
        bottom: 0;
        background: #fff;
        
    }

    `
export const HeroBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border:none;
    object-fit: cover;
    
    :before{
        content:'';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.6);
    }

    
`
export const HeroH1 = styled.h1`
    color:black;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 760px){
        font-size:40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }

    `
export const HeroP = styled.p`
    margin-top: 324px;
    color: #fff;
    font-size: 46px;
    text-align: left center;
    max-width: 650px;
    margin-left: 45px;
    

    

    @media screen and (max-width: 760px){
        font-size:24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }

`
export const HeroBtnWrapper = styled.div`
    margin-top: 332px;
    display:flex;
    flex-direction: column;
    align-items: center;
    
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size:20px;
`  
export const ArrowRight = styled(MdArrowRight)`
    margin-left: 8px;
    font-size:20px;
`

export const HeroContent = styled.div `
    color: white;
    max-width: 1200px;
    position:absolute;
    padding: 8px 24px;
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const ImgWrap = styled.div `
    max-width: 555px;
    heigth: 100%
`

export const Img = styled.img`
    width:100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`