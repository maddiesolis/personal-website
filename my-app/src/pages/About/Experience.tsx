import styled from "styled-components";
import { PageDescriptionSpan, PageSubtitleSpan } from "../../components/GeneralSC";

const ExperienceSectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const TitleBoxDiv = styled(ExperienceSectionDiv)`
    gap: 30px;
`
const ExperienceBoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 750px;
    /* width: 80%; */
    overflow-y: scroll;
    /* background-color: #fbfbfb; */
    background-color: white;
    border: 2px solid #f6f6f6;
    border-radius: 8px;
    padding: 40px 20px;
    gap: 20px;

    ::-webkit-scrollbar{
        -webkit-appearance: none;
        width: 7px;
    }

    ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .5);
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}
`
const ExperienceCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 90%;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
`
const ExperienceCardTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const PositionSpan = styled.span`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #3B8EA5;
`
const DatesSpan = styled(PositionSpan)`
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #264653;
`
const CompanySpan = styled(DatesSpan)`
    font-weight: 300;
`
const ExpDescriptionSpan = styled.span`
    font-family: 'Ubuntu', sans-serif;
    color: #85757B;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
`

export interface ExpCardProps {
    position: string;
    dates: string;
    company: string;
    description: string;
}
interface ExpBoxProps {
    exps: Array<ExpCardProps>;
}

export const ExperienceCard: React.FC<ExpCardProps> = ({
    position, dates, company, description
}) => {
    return (
        <ExperienceCardDiv>
            <ExperienceCardTitleDiv>
                <PositionSpan>{position}</PositionSpan>
                <DatesSpan>{dates}</DatesSpan>
                <CompanySpan>{company}</CompanySpan>
            </ExperienceCardTitleDiv>
            <ExpDescriptionSpan>
            {description}
            </ExpDescriptionSpan>
        </ExperienceCardDiv>
    )
}

export const ExperienceSection: React.FC<ExpBoxProps> = ({
    exps
}) => {
    return (
        <ExperienceSectionDiv>
            <TitleBoxDiv>
                <ExperienceSectionDiv>
                    <PageSubtitleSpan>Experience</PageSubtitleSpan>
                    <PageDescriptionSpan>Scroll through this list to see my past (and current) work experience. The list is ordered from most to least recent.</PageDescriptionSpan>
                </ExperienceSectionDiv>
                <ExperienceBoxDiv>
                {exps.map((exp) => {
                    return (
                        <ExperienceCard position={exp.position} dates={exp.dates} company={exp.company} description={exp.description}/>
                    )
                })}
                </ExperienceBoxDiv>
            </TitleBoxDiv>
        </ExperienceSectionDiv>
    )
}