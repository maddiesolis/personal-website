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
export const OverviewDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`
export const OverviewSection: React.FC = ({
}) => {
    return (
        <>
            <OverviewWriteupDiv>
                {/* <PageSubtitleSpan>Overview</PageSubtitleSpan> */}
                <OverviewDiv>
                <OverviewSpanDiv>
                    Hey! My name is Madeline and I am currently in my third year of the Visual Arts and Computer Science
                    Combined Major program at the University of Victoria. This interdisciplinary 
                    field has inspired me to continue bridging the gap between technical and creative 
                    worlds, and has given me the tools and skills I need to succeed in both areas. I love art, especially digital
                    and analogue drawing, and I also love to dance ballet, salsa, and bachata!
                </OverviewSpanDiv>
                <SchoolSVG/>
            </OverviewDiv>
            </OverviewWriteupDiv>
            </>
    )
}