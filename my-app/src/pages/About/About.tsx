import React from 'react';
import CompsCardsGrid, { AwardsCardsGrid, ExpCardsGrid } from '../../components/CardsGrid';
import Footer from '../../components/Footer';
import { BasicCardDiv, InnerPageContainer, PageSubtitleSpan, PageTitleSpan, StandardParaSPan, SubSubTitleSpan } from '../../components/GeneralSC';
import { BooksSVG, ComputerSVG, SchoolSVG, TreeSVG, VictoriaSVG, WorkSVG } from '../../svg/AboutSVG';
import { DescriptionSpan } from '../Home/HomeSC';
import { AwardsCards, CompsCards, ExpCards } from '../Skills/CardsArrays';
import { AboutCardDiv, AboutDescriptionSpan, TopAboutDiv, AboutLeftSideDiv, AboutRightSideDiv, BasicInfoDiv, InfoSectionDiv, OverviewDiv, OuterAboutDiv, BottomAboutDiv } from './AboutSC';

export interface ITimelinePageProps {}

const TimelinePage: React.FunctionComponent<ITimelinePageProps> = (props) => {

    return (
        <InnerPageContainer 
        pagetitle='About me' 
        description='On this page, you’ll learn more about who I am, and what I do (in both professional and academic contexts).'
        contents={
            <OuterAboutDiv>
            <TopAboutDiv>
                <OverviewDiv>
                    <PageSubtitleSpan>Overview</PageSubtitleSpan>
                    <AboutDescriptionSpan>
                        I am currently in my third year of the Visual Arts and Computer Science Combined Major program at the University of Victoria. This interdisciplinary field has inspired me to continue bridging the gap between technical and creative subjects, and has given me the tools and skills I need to succeed in both areas. <br/> <br/>
                        In May 2022, I began an eight-month co-op with SaaSquatch as a frontend developer. I learnt how to use Typescript with React in a very short amount of time, and was pushing code to production within the first month of being there! My position at SaaSquatch evolved over time, and I ended up landing the role of Technical Product Analyst. I returned to classes in January 2023 and was hired part-time at SaaSquatch. My two positions at SaaSquatch have given me well-rounded knowledge of the SaaS industry, as I have worked with all departments, ranging from engineering to marketing, to product management.
                    </AboutDescriptionSpan>
                </OverviewDiv>
                <ExpCardsGrid gridtitle="Experience" description='Hover over the cards below to see details about each work experience. The cards are ordered from most to least recent.' cards={ExpCards}/>
            </TopAboutDiv>
            <BottomAboutDiv>
                <AwardsCardsGrid gridtitle='Awards & Accomplishments' cards={AwardsCards} description='Hover over a card to flip it; the back of every card contains a detailed description of that competency.'/>
            </BottomAboutDiv>
            </OuterAboutDiv>
        }
        />
    );
};

export default TimelinePage;