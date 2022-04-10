import React from 'react'
import { Button } from 'react-scroll';

import { InfoContainer, InfoRow, InfoWrapper, TextWrapper, BtnWrap, ImgWrap, Img, Subtitle, TopLine } from './InfoElement';

const InfoSection = () => {
  return (
    <>
    <InfoContainer>
        <InfoWrapper>
            <InfoRow>
                <TextWrapper>
                    <TopLine>Titulo</TopLine>
                    <Subtitle>titulo2</Subtitle>
                    <BtnWrap>
                        <Button to='home' />
                    </BtnWrap>
                </TextWrapper>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection