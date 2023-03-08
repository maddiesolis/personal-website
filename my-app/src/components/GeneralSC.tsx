import { Children, ReactElement, ReactNode } from "react";
import styled from "styled-components";

export const CenteredPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: none;
    padding-bottom: 100px;
`
export const OuterPageContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`
export const PageTitleSpan = styled.span`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 55px;
    color: #264653;
`
export const PageSubtitleSpan = styled(PageTitleSpan)`
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
`
export const SubSubTitleSpan = styled(PageTitleSpan)`
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
`
export const StandardParaSPan = styled.span`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #85757B;
`
export const PageDescriptionSpan = styled(StandardParaSPan)`
    font-size: 18px;
    line-height: 28px;
    text-align: left;
`
export const PageTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const BoxTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
`
export const BasicCardDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const ListsDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    gap: 5%;
`
export const ListCardDivPink = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    background-color: #F9E8D8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;
    padding: 40px;
    gap: 15px;
`
export const ListCardDivYellow = styled(ListCardDivPink)`
    background-color: #FDFCDC;
`
export const ListCardDivGreen = styled(ListCardDivPink)`
    background-color: #e3f9ed;
`
export const ListItemSpan = styled.li`
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;;
    color: #023047;
    list-style-type: disc;
`

export interface PageProps{
    pagetitle: string;
    description?: string;
    contents: ReactElement;
}
export const InnerPageContainer: React.FC<PageProps> = ({
    pagetitle,
    description,
    contents,
}) => {
    return (
        <OuterPageContainerDiv>
            <PageTitleDiv>
                <PageTitleSpan>{pagetitle}</PageTitleSpan>
                <PageDescriptionSpan>{description}</PageDescriptionSpan>
            </PageTitleDiv>
            {contents}
        </OuterPageContainerDiv>
    )
}

export interface ListsContainerProps{
    title: string;
    items: string[];
    colour: "pink" | "yellow" | "green";
}
export const ListsContainer: React.FC<ListsContainerProps> = ({
    title, items, colour
}) => {
    if (colour == "pink") {
        return (
            <ListsDiv>
                <ListCardDivPink>
                    <PageSubtitleSpan>
                        {title}
                    </PageSubtitleSpan>
                    {items.map((item) => {
                        return (
                            <ListItemSpan>{item}</ListItemSpan>
                        )
                    })}
                </ListCardDivPink>
            </ListsDiv>
        )
    }
    else if (colour == "yellow") {
        return (
            <ListsDiv>
                <ListCardDivYellow>
                    <PageSubtitleSpan>
                        {title}
                    </PageSubtitleSpan>
                    {items.map((item) => {
                        return (
                            <ListItemSpan>{item}</ListItemSpan>
                        )
                    })}
                </ListCardDivYellow>
            </ListsDiv>
        )
    }
    else if (colour == "green") {
        return (
            <ListsDiv>
                <ListCardDivGreen>
                    <PageSubtitleSpan>
                        {title}
                    </PageSubtitleSpan>
                    {items.map((item) => {
                        return (
                            <ListItemSpan>{item}</ListItemSpan>
                        )
                    })}
                </ListCardDivGreen>
            </ListsDiv>
        )
    }
    return <div>clover</div>;
}