import styled from "styled-components";

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
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #85757B;
`
export const BlueBoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: fit-content;
    width: fit-content;
    background-color: #EDF6F9;
    border-radius: 15px;
    padding: 50px 150px 130px 150px;
    gap: 80px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 52px;
`
export const ListCardDivPink = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 388px;
    background-color: #F9E8D8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;
    padding: 44px;
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