import React from 'react';
import { FullNameSpan, HeaderDiv, HomeDiv, HomeTitleDiv, OverviewCardsContainerDiv, OverviewDiv, SubtitleSpan } from './HomeSC';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {

    return (
        <HomeDiv>
            <HomeTitleDiv>
                <SubtitleSpan>Hi, my name is</SubtitleSpan>
                <FullNameSpan>Madeline Solis de Ovando</FullNameSpan>
                <SubtitleSpan>I'm a computer science and visual arts student working towards the enhancement of human-computer interactions.</SubtitleSpan>
            </HomeTitleDiv>
            <OverviewDiv>
                <HeaderDiv>Overview</HeaderDiv>
                <OverviewCardsContainerDiv>
                    <span>Based in Victoria, BC</span>
                    <span>Third year Computer Science and Visual Arts Combined Major student at the University of Victoria</span>
                    <span>Recent work experience as a product analyst at SaaSquatch</span>
                </OverviewCardsContainerDiv>
            </OverviewDiv>
        </HomeDiv>
    );
};

export default HomePage;