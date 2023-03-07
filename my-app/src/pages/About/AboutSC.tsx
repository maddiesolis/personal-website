import styled from "styled-components";
import { DescriptionSpan } from "../Home/HomeSC";

export const OuterAboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: fit-content;
    /* margin: 50px 166px 100px 166px; */
    gap: 100px;
    /* padding-bottom: 100px; */
`
export const TopAboutDiv = styled.div`
    /* display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 100px;
    align-items: start;
    justify-content: start;
    height: 840px; */

    display: flex;
    justify-content: space-between;
    
`
export const BottomAboutDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
// export const AboutContentDiv = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     height: 100%;
// `
export const AboutLeftSideDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin: 160px;
    margin-top: 50px;
    gap: 50px;
`
export const AboutRightSideDiv = styled(AboutLeftSideDiv)`
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`
export const BasicInfoDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 300px;
    align-items: center;
`
export const InfoSectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
`
export const AboutCardDiv = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    padding: 10px;
    width: 1000px;
    height: fit-content;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const OverviewDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 20px;
`
export const AboutDescriptionSpan = styled(DescriptionSpan)`
    color: #70757f;
`