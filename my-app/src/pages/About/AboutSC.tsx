import styled from "styled-components";
import { PageSubtitleSpan } from "../../components/GeneralSC";
import { SchoolSVG, WorkSVG } from "../../svg/AboutSVG";
import { DescriptionSpan } from "../Home/HomeSC";

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
export const MiddleSectionDiv = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
`
export const SVGContainerDiv = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-left: 150px;
`
// const FactsSectionContainerDiv = styled.div`
//     display: flex;
// `
// const FactDiv = styled.div`
//     display: flex;
//     flex-direction: column;
// `
// const FactTextSpan = styled.div`
//     color: blue;
// `
// export const FactsSection: React.FC = ({
// }) => {
//     return (
//         <FactsSectionContainerDiv>
//             <FactDiv>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
//                 <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
//             </svg>
//                 <FactTextSpan>
//                     Based in Victoria, BC
//                 </FactTextSpan>

//             </FactDiv>
//         </FactsSectionContainerDiv>
//     )
// }
export const OverviewSection: React.FC = ({
}) => {
    return (
        <>
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
            </>
    )
}