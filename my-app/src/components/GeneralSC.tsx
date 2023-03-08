import { Children, ReactElement, ReactNode } from "react";
import styled from "styled-components";

export const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 50px;
    padding: none;
    padding-bottom: 100px;
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
    /* margin-left: -85px; */
`
export const BlueBoxTitleDiv = styled(BoxTitleDiv)`
    /* display: flex; */
    /* margin-left: -85px; */
`
export const BlueBoxDiv = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: fit-content;
    width: fit-content;
    background-color: #EDF6F9;
    border-radius: 15px;
    padding: 50px 150px 130px 150px;
    gap: 80px; */

    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* position: absolute; */
    height: fit-content;
    width: fit-content;
    gap: 20px;
    background-color: #EDF6F9;
    border-radius: 15px;
`
export const CardsLayoutDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch;
    grid-gap: 60px;
`
export const BasicCardDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    padding: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const ListsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 7%;
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
    gap: 20px;
`
export const ListCardDivYellow = styled(ListCardDivPink)`
    background-color: #FDFCDC;
`
export const ListCardDivGreen = styled(ListCardDivPink)`
    background-color: #e3f9ed;
`
export const ListItemSpan = styled.span`
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;;
    color: #023047;
    list-style-type: circle;
`

export interface PageProps{
    pagetitle: string;
    description: string;
    contents: ReactElement;
}
export const InnerPageContainer: React.FC<PageProps> = ({
    pagetitle,
    description,
    contents,
}) => {
    return (
        <PageDiv>
                <PageTitleDiv>
                    <PageTitleSpan>{pagetitle}</PageTitleSpan>
                    <PageDescriptionSpan>{description}</PageDescriptionSpan>
                </PageTitleDiv>
                {contents}
        </PageDiv>
    )
}