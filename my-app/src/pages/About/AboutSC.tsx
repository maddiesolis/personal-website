import styled from "styled-components";
import { PageSubtitleSpan } from "../../components/GeneralSC";
import { SchoolSVG } from "../../svg/AboutSVG";
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
export const OverviewContainerDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
export const OverviewWriteupDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const OverviewSpanDiv = styled.div`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    color: #264653;
`
export const OverviewSVGDiv = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`
export const OverviewSection: React.FC = ({
}) => {
    return (
            <OverviewWriteupDiv>
                <PageSubtitleSpan>Overview</PageSubtitleSpan>
                <OverviewSpanDiv>
                    I am currently in my third year of the Visual Arts and Computer Science
                    Combined Major program at the University of Victoria. This interdisciplinary 
                    field has inspired me to continue bridging the gap between technical and creative 
                    worlds, and has given me the tools and skills I need to succeed in both areas.
                    <br/>
                    In May 2022, I began an eight-month co-op with SaaSquatch as a frontend developer. 
                    I learnt how to use Typescript with React in a very short amount of time, and was 
                    pushing code to production within the first month of being there! My position at 
                    SaaSquatch evolved over time, and I ended up landing the role of Technical Product 
                    Analyst. I returned to classes in January 2023 and was hired part-time at SaaSquatch. 
                    My two positions at SaaSquatch have given me well-rounded knowledge of the SaaS industry, 
                    as I have worked with all departments, ranging from engineering to marketing, to product 
                    management.
                </OverviewSpanDiv>
            </OverviewWriteupDiv>
    )
}