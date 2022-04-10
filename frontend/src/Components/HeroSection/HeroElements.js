import styled from "styled-components";
import ArrowForward from 'react-icons';


export const HeroContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 38px;
    height 500px;
    position: relative;
    z-index: 1
    
    :before{
        content: '';
        position: absolute;
        top: 0;
        left:0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%),rgba(0,0,0,0.6)100%)
    }

    `

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const Imagep =  styled.image`
    width: 100%;
    heigth: 100%;
    -o-object-fit:cover;
    object-fit: cover;
    background: grey;
`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display:flex;
    flex-direction: column;
    align-items: center;

`

export const ArrowForward = styled(ArrowForward)`
    margin-left: 8px;
    font-size:20px;
`   