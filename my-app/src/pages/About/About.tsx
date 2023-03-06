import React from 'react';
import Footer from '../../components/Footer';
import { BasicCardDiv, PageSubtitleSpan, PageTitleSpan, StandardParaSPan, SubSubTitleSpan } from '../../components/GeneralSC';
import { BooksSVG, ComputerSVG, SchoolSVG, TreeSVG, VictoriaSVG, WorkSVG } from '../../svg/AboutSVG';
import { AboutCardDiv, AboutContentDiv, AboutDiv, AboutLeftSideDiv, AboutRightSideDiv, BasicInfoDiv, InfoSectionDiv } from './AboutSC';

export interface ITimelinePageProps {}

const TimelinePage: React.FunctionComponent<ITimelinePageProps> = (props) => {

    return (
        <AboutDiv>
        <PageTitleSpan>About me</PageTitleSpan>
            <AboutContentDiv>
                <AboutLeftSideDiv>
                    <AboutCardDiv>hello</AboutCardDiv>
                    <AboutCardDiv>hello</AboutCardDiv>
                </AboutLeftSideDiv>
                <AboutRightSideDiv></AboutRightSideDiv>
            </AboutContentDiv>
        </AboutDiv>
    );
};

export default TimelinePage;