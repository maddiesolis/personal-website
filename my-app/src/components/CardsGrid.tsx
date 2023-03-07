import { AwardCard, AwardsFlipCard, CompsFlipCard, ExpFlipCard } from "./FlipCard";
import { BlueBoxDiv, BlueBoxTitleDiv, BoxTitleDiv, CardsLayoutDiv, PageDescriptionSpan, PageSubtitleSpan } from "./GeneralSC";
import styled from "styled-components";

export interface CompCardProps {
    svg: React.ReactNode;
    title: string;
    description: string;
}
export interface CompsCardsGridProps {
    gridtitle: string;
    description: string;
    cards: Array<CompCardProps>;
}
export interface AwardCardProps {
    title: string;
    year: string;
    description: string;
}
export interface AwardsCardsGridProps {
    gridtitle: string;
    description: string;
    cards: Array<AwardCardProps>;
}
export interface ExpCardProps {
    position: string;
    dates: string;
    company: string;
    description: string;
}
export interface ExpCardsGridProps {
    gridtitle: string;
    description: string;
    cards: Array<ExpCardProps>;
}
export const CompsCardsGrid: React.FC<CompsCardsGridProps> = ({
    gridtitle: title,
    description,
    cards,
}) => {
    return (
    <BlueBoxDiv>
        <BlueBoxTitleDiv>
            <PageSubtitleSpan>{title}</PageSubtitleSpan>
            <PageDescriptionSpan>{description}</PageDescriptionSpan>
        </BlueBoxTitleDiv>
        <CardsLayoutDiv>
            {cards.map((card) => {
                return (
                    <CompsFlipCard svg={card.svg} title={card.title} description={card.description}/>
                )
            })}
        </CardsLayoutDiv>
    </BlueBoxDiv>    
    );
};

export const AwardsCardsGrid: React.FC<AwardsCardsGridProps> = ({
    gridtitle: title,
    description,
    cards,
}) => {
    return (
    <BlueBoxDiv>
        <BlueBoxTitleDiv>
            <PageSubtitleSpan>{title}</PageSubtitleSpan>
            <PageDescriptionSpan>{description}</PageDescriptionSpan>
        </BlueBoxTitleDiv>
        <CardsLayoutDiv>
            {cards.map((card) => {
                return (
                    <AwardsFlipCard title={card.title} year={card.year} description={card.description}/>
                )
            })}
        </CardsLayoutDiv>
    </BlueBoxDiv>    
    );
};

/* Experience cards */
export const ExpSectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 450px; */
    gap: 50px;
`
export const ExpBoxDiv = styled.div`
    /* padding: 20px; */
    height: 500px;
    overflow-y: scroll;
    padding-left: 20px;
    /* ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, .5);
        box-shadow: 0 0 1px rgba(255, 255, 255, .5);
    } */
`
export const ExpCardsLayoutDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 400px; */
    /* overflow: hidden; */
    /* overflow-y: scroll; */
    /* justify-content: space-between; */
    /* align-items: left; */
    gap: 40px;
    /* padding: 10px; */
`

export const ExpCardsGrid: React.FC<ExpCardsGridProps> = ({
    gridtitle: title,
    description,
    cards,
}) => {
    return (
    <ExpSectionDiv>
        <BoxTitleDiv>
            <PageSubtitleSpan>{title}</PageSubtitleSpan>
            <PageDescriptionSpan>{description}</PageDescriptionSpan>
        </BoxTitleDiv>
            <ExpBoxDiv>
                <ExpCardsLayoutDiv>
                    {cards.map((card) => {
                        return (
                            <ExpFlipCard position={card.position} dates={card.dates} company={card.company} description={card.description}/>
                        )
                    })}
                </ExpCardsLayoutDiv>
            </ExpBoxDiv>
    </ExpSectionDiv>    
    );
};



export default CompsCardsGrid;
