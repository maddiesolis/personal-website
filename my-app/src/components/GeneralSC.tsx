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
    font-size: 32px;
    line-height: 40px;
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
    padding: 20px 60px 60px;
    gap: 30px;
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
    height: 130px;
    width: 264px;
    background-color: white;
    border-radius: 8px;
    padding: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`