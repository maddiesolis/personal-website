import { AwardsFlipCard, BlueBoxDiv, CardsLayoutContainerDiv, CardsLayoutDiv, CompsFlipCard } from "./FlipCard";
import { PageDescriptionSpan, PageSubtitleSpan, PageTitleDiv } from "./GeneralSC";
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
        <PageTitleDiv>
            <PageSubtitleSpan>{title}</PageSubtitleSpan>
            <PageDescriptionSpan>{description}</PageDescriptionSpan>
        </PageTitleDiv>
        <CardsLayoutContainerDiv>
        <CardsLayoutDiv>
            {cards.map((card) => {
                return (
                    <CompsFlipCard svg={card.svg} title={card.title} description={card.description}/>
                )
            })}
        </CardsLayoutDiv>
        </CardsLayoutContainerDiv>
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
        <PageTitleDiv>
            <PageSubtitleSpan>{title}</PageSubtitleSpan>
            <PageDescriptionSpan>{description}</PageDescriptionSpan>
        </PageTitleDiv>
        <CardsLayoutContainerDiv>
            <CardsLayoutDiv>
                {cards.map((card) => {
                    return (
                        <AwardsFlipCard title={card.title} year={card.year} description={card.description}/>
                    )
                })}
            </CardsLayoutDiv>
        </CardsLayoutContainerDiv>
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
`
export const ExpCardsLayoutDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export default CompsCardsGrid;
