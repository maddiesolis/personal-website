import styled from "styled-components";

export const HomeDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    padding: 64px
`
export const HomeLeftSideDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 5%;
`
export const HomeRightSideDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
    padding-right: 136px;
    padding-bottom: 220px;
`

export const HomeTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 2px; */
`

export const IntroSpan = styled.span`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 22px;
    color: #264653;
`

export const FullNameSpan = styled.span`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 54px;
    line-height: 74px;
    color: #264653;
`
export const DescriptionSpan = styled(IntroSpan)`
    font-weight: 400 !important;
    width: 600px;
    font-size: 24px;
    line-height: 32px;
    margin-top: 20px;
`

export const AnimatedButtonDiv = styled.div`
    position: relative;
    width: 150px;
    height: 40px;
    border: 3px solid #3B8EA5;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const AnimatedButton = styled.button`
    height: 44px;
    width: 154px;
    background-color: #3B8EA5;
    border: none;
    margin-top: -8px;
    margin-left: -8px;
    :hover {
        transform: translateY(2px) translateX(2px);
        cursor: pointer;
    }
`
export const AnimatedButtonSpan = styled.span`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #EDF6F9;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`