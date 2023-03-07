import React from 'react';
import Footer from '../../components/Footer';
import { HomepageSVG } from '../../svg/HomepageSVG';
import { AnimatedButton, AnimatedButtonDiv, AnimatedButtonLink, DescriptionSpan, FullNameSpan, HomeDiv, HomeLeftSideDiv, HomeRightSideDiv, HomeTitleDiv, IntroSpan } from './HomeSC';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {

    return (
        <>
        <HomeDiv>
            <HomeLeftSideDiv>
                <HomeTitleDiv>
                    <IntroSpan>Hi, my name is</IntroSpan>
                    <FullNameSpan>Madeline Solis de Ovando</FullNameSpan>
                    <DescriptionSpan>and I'm a computer science and visual arts student working towards the enhancement of human-computer interactions.</DescriptionSpan>
                </HomeTitleDiv>
                <AnimatedButtonDiv>
                    <AnimatedButton>
                        <AnimatedButtonLink to="/about">About me</AnimatedButtonLink>
                    </AnimatedButton>
                </AnimatedButtonDiv>
            </HomeLeftSideDiv>
            <HomeRightSideDiv>
                <HomepageSVG/>
            </HomeRightSideDiv>
        </HomeDiv>
        </>
    );
};

export default HomePage;