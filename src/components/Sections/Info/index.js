import React from 'react'

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TopLine, Heading, Subtitle, TextWrapper, ImgWrap, Img } from './InfoElements'

const Info = ({ lightBg, id, imgStart, topLine, headline, lightText, description, img, alt, darkText, }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine> {topLine}</TopLine>
                                <Heading lightText={lightText}> {headline} </Heading>
                                <Subtitle darkText={darkText}> {description} </Subtitle>

                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info
