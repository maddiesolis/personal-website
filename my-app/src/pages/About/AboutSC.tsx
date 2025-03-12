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
                Hi! I'm Madeline, a full stack software developer. I graduated from the University of Victoria in May 2024 with a degree in Computer Science and Visual Arts. This interdisciplinary background fuels my passion for bridging the gap between tech and creativity. I focus on building scalable, reliable software, writing maintainable code, and fostering cohesive engineering teams. Outside of work, I enjoy contemporary art, creative coding, and staying active through ballet and salsa!
                </OverviewSpanDiv>
                <SchoolSVG/>
            </OverviewDiv>
            </OverviewWriteupDiv>
            </>
    )
}