import { FlipCard } from "./FlipCard";
import { BlueBoxDiv, CardsLayoutDiv, PageSubtitleSpan } from "./GeneralSC";

export interface CardProps {
    svg: React.ReactNode;
    title: string;
    description: string;
}
export interface CardsGridProps {
    gridtitle: string;
    cards: Array<CardProps>;
}

export const CardsGrid: React.FC<CardsGridProps> = ({
    gridtitle: title,
    cards,
}) => {
    return (
    <BlueBoxDiv>
        <PageSubtitleSpan>{title}</PageSubtitleSpan>
        <CardsLayoutDiv>
            {cards.map((card) => {
                return (
                    <FlipCard svg={card.svg} title={card.title} description={card.description}/>
                )
            })}
        </CardsLayoutDiv>
    </BlueBoxDiv>    
    );
};

export default CardsGrid;
