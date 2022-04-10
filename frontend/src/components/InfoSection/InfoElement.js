import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => lightBg ? '#f9f9f9' : '010606'}
`
export const InfoWrapper = styled.div `
    display: grid;
    z-index:1;
    heigth: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 12px;
    justify-content: center;
`

export const InfoRow = styled.div `
    display: grid;
    align-items: center;
    
`

export const TextWrapper = styled.div `
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-heigth: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')}
`

export const BtnWrap = styled.div `
    display: flex;
    justify.content: flex-start;
`

export const ImgWrap = styled.div `
    max-width: 555px;
    height: 100%;
`
export const Img = styled.img `
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const TopLine = styled.p `
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 1.4px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 16px;
`