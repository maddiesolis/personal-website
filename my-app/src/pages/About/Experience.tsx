import styled from "styled-components";
import { PageDescriptionSpan, PageSubtitleSpan } from "../../components/GeneralSC";

const ScrollSectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 96%;
    gap: 10px;
`
const TitleBoxDiv = styled(ScrollSectionDiv)`
    gap: 30px;
`
const ScrollBoxDiv = styled.div`
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
    gap: 30px;

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
    title: string;
    dates: string;
    company: string;
    description: string;
}
interface ExpBoxProps {
    title: string;
    description: string;
    exps: Array<ExpCardProps>;
}

export const ExperienceCard: React.FC<ExpCardProps> = ({
    title: position, dates, company, description
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
    title, description, exps
}) => {
    return (
        <ScrollSectionDiv>
            <TitleBoxDiv>
                <ScrollSectionDiv>
                    <PageSubtitleSpan>{title}</PageSubtitleSpan>
                    <PageDescriptionSpan>{description}</PageDescriptionSpan>
                </ScrollSectionDiv>
                <ScrollBoxDiv>
                {exps.map((exp) => {
                    return (
                        <ExperienceCard title={exp.title} dates={exp.dates} company={exp.company} description={exp.description}/>
                    )
                })}
                </ScrollBoxDiv>
            </TitleBoxDiv>
        </ScrollSectionDiv>
    )
}