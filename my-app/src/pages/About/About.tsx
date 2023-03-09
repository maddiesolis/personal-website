import React from 'react';
import CompsCardsGrid, { AwardsCardsGrid } from '../../components/CardsGrid';
import { PageContainerDiv } from '../../components/ComponentsSC';
import Footer from '../../components/Footer';
import { BasicCardDiv, CenteredPageDiv, InnerPageContainer, PageSubtitleSpan, PageTitleSpan, StandardParaSPan, SubSubTitleSpan } from '../../components/GeneralSC';
import { BooksSVG, ComputerSVG, SchoolSVG, TreeSVG, VictoriaSVG, WorkSVG } from '../../svg/AboutSVG';
import { DescriptionSpan } from '../Home/HomeSC';
import { AwardsCards, CompsCards, ExpCards } from '../Skills/CardsArrays';
import { MiddleSectionDiv, OverviewSection, SVGContainerDiv } from './AboutSC';
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
                description={'On this page, you’ll learn more about who I am, and what I do (in both professional and academic contexts).'} 
                contents={
                <CenteredPageDiv>
                    <OverviewSection/>
                    <MiddleSectionDiv>
                        <ExperienceSection title="Experience" description="Scroll through this list to see my past (and current) work experience. The list is ordered from most to least recent." exps={ExpCards}/>
                        <AwardsDiv>
                            <ExperienceSection title="Awards" description="Scroll through this list to see the scholarships and bursaries I have been awarded. The list is ordered from most to least recent." exps={AwardsCards}/>
                        </AwardsDiv>
                    </MiddleSectionDiv>
                </CenteredPageDiv>}/>
        </PageContainerDiv>
    );
};

export default AboutPage;