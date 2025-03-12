import React from 'react';
import { PageContainerDiv } from '../../components/ComponentsSC';
import { CenteredPageDiv, InnerPageContainer } from '../../components/GeneralSC';
import { AwardsCards, ExpCards } from '../Skills/CardsArrays';
import { MiddleSectionDiv, OverviewSection } from './AboutSC';
import { ExperienceSection } from './Experience';
import styled from 'styled-components';

const AwardsDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`
const AboutPage: React.FC = () => {

    return (
        <PageContainerDiv>
            <InnerPageContainer 
                pagetitle={'About me'} 
                description={'On this page, you’ll learn more about who I am, and what I do.'} 
                contents={
                <CenteredPageDiv>
                    <OverviewSection/>
                    <MiddleSectionDiv>
                        <ExperienceSection title="Experience" description="Scroll through this list to see my work experience history." exps={ExpCards}/>
                        <AwardsDiv>
                            <ExperienceSection title="Awards" description="Scroll through this list to see the scholarships and bursaries I have been awarded." exps={AwardsCards}/>
                        </AwardsDiv>
                    </MiddleSectionDiv>
                </CenteredPageDiv>}/>
        </PageContainerDiv>
    );
};

export default AboutPage;