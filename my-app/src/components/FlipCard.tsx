// import { CardBackDiv, CardContainerDiv, CardDiv, CardFrontDiv } from "./GeneralSC";
import styled from "styled-components";
import { CardProps } from "./CardsGrid";

export const CardContainerDiv = styled.div`
    height: 150px;
    width: 264px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const CardDiv = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 750ms;
    :hover {
        transform: rotateY(180deg);
    }
`
export const CardFrontDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: 100%;
    width: 100%;
    background-color: white;
    position: absolute;
    backface-visibility: hidden;
    border-radius: 8px;
    padding: 10px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: #264653;
`
export const CardBackDiv = styled(CardFrontDiv)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: white;
    color: #85757B;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    text-align: center;
    transform: rotateY(180deg) translateX(20px);
`

export const Card: React.FC<CardProps> = ({
    svg, title, description
}) => {
    return (
        <CardDiv>
            <CardBackDiv>{description}</CardBackDiv>
            {/* <CardFront svg={svg} title={title} description={description}></CardFront> */}
            <CardFrontDiv>
                {svg}
                {title}
            </CardFrontDiv>
        </CardDiv>
    )
};

export const FlipCard: React.FC<CardProps> = ({
    svg, title, description
}) => {
    return (
        <CardContainerDiv>
            <Card svg={svg} title={title} description={description}/>
        </CardContainerDiv>
    )
};