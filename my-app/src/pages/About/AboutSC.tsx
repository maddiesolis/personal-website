import styled from "styled-components";
import { SchoolSVG } from "../../svg/AboutSVG";

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
                <OverviewDiv>
                <OverviewSpanDiv>
                    Hey! My name is Madeline and I am a full stack software developer. I graduated from the University of Victoria
                    in May 2024 and completed the Computer Science and Visual Arts Combined Major program. This interdisciplinary 
                    field has inspired me to continue bridging the gap between technical and creative 
                    worlds, and has given me the tools and skills I need to succeed in both areas.
                    I am passionate about building scalable, reliable software that solves real-world problems and am focused
                    on writing maintainable code, fostering cohesive engineering teams, and leveraging AI-driven tools to enhance efficiency.
                    As for my personal interests, I have a passion for contemporary art, particularly creative coding and digital/analogue drawing. I also love to stay active by dancing ballet and salsa!
                </OverviewSpanDiv>
                <SchoolSVG/>
            </OverviewDiv>
            </OverviewWriteupDiv>
            </>
    )
}