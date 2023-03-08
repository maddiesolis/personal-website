import styled from "styled-components";
import { AwardCardProps, CompCardProps, ExpCardProps } from "./CardsGrid";

export const BlueBoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    gap: 20px;
    background-color: #EDF6F9;
    border-radius: 4px;
    padding: 2% 5%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const CardsLayoutContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 5%;
`
export const CardsLayoutDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 3rem;
`
export const CardContainerDiv = styled.div`
    height: 150px;
    width: 264px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const ExpCardContainerDiv = styled(CardContainerDiv)`
    height: 330px;
    width: 400px;
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
`
export const CardFrontTextSpan = styled.div`
    font-family: 'Ubuntu', sans-serif;
    text-align: center;
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
    font-family: 'Ubuntu', sans-serif;
    color: #85757B;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    text-align: center;
    transform: rotateY(180deg) translateX(20px);
`
export const YearSpan = styled.span`
    font-family: 'Ubuntu',sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 22px;
    color: #F07167;
`
export const ExpCardFrontDiv = styled(CardFrontDiv)`
    justify-content: space-between;
    align-items: flex-start;
`
export const ExpPositionSpan = styled.span`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #3B8EA5;
`
export const ExpDatesSpan = styled(ExpPositionSpan)`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
`
export const ExpCompanySpan = styled(ExpDatesSpan)`
    font-weight: 300;
    color: #264653;
`
export const ExpDatesCompanyDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

/* Competencies */
export const CompCard: React.FC<CompCardProps> = ({
    svg, title, description
}) => {
    return (
        <CardDiv>
            <CardBackDiv>{description}</CardBackDiv>
            <CardFrontDiv>
                {svg}
                <CardFrontTextSpan>{title}</CardFrontTextSpan>
            </CardFrontDiv>
        </CardDiv>
    )
};
export const CompsFlipCard: React.FC<CompCardProps> = ({
    svg, title, description
}) => {
    return (
        <CardContainerDiv>
            <CompCard svg={svg} title={title} description={description}/>
        </CardContainerDiv>
    )
};

/* Awards */
export const AwardCard: React.FC<AwardCardProps> = ({
    title, year, description
}) => {
    return (
        <CardDiv>
            <CardBackDiv>{description}</CardBackDiv>
            <CardFrontDiv>
                <CardFrontTextSpan>{title}</CardFrontTextSpan>
                <YearSpan>{year}</YearSpan>
            </CardFrontDiv>
        </CardDiv>
    )
};
export const AwardsFlipCard: React.FC<AwardCardProps> = ({
    title, year, description
}) => {
    return (
        <CardContainerDiv>
            <AwardCard title={title} year={year} description={description}/>
        </CardContainerDiv>
    )
};

/* Experience */
export const ExpCard: React.FC<ExpCardProps> = ({
    position, dates, company, description
}) => {
    return (
        <CardDiv>
            <CardBackDiv>{description}</CardBackDiv>
            <ExpCardFrontDiv>
                <ExpPositionSpan>{position}</ExpPositionSpan>
                <ExpDatesCompanyDiv>
                    <ExpDatesSpan>{dates}</ExpDatesSpan>
                    <ExpCompanySpan>{company}</ExpCompanySpan>
                </ExpDatesCompanyDiv>
            </ExpCardFrontDiv>
        </CardDiv>
    )
};
export const ExpFlipCard: React.FC<ExpCardProps> = ({
    position, dates, company, description
}) => {
    return (
        <ExpCardContainerDiv>
            <ExpCard position={position} dates={dates} company={company} description={description}/>
        </ExpCardContainerDiv>
    )
};