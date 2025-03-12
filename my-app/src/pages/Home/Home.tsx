import React from 'react';
import { HomepageContainerDiv } from '../../components/ComponentsSC';
import { HomepageSVG } from '../../svg/HomepageSVG';
import { AnimatedButton, AnimatedButtonDiv, AnimatedButtonLink, DescriptionSpan, FullNameSpan, HomeDiv, HomeLeftSideDiv, HomeRightSideDiv, HomeTitleDiv, IntroSpan } from './HomeSC';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {

    return (
        <HomepageContainerDiv>
            <HomeDiv>
                <HomeLeftSideDiv>
                    <HomeTitleDiv>
                        <IntroSpan>Hi, my name is</IntroSpan>
                        <FullNameSpan>Madeline Solis de Ovando</FullNameSpan>
                        <DescriptionSpan>and I'm a full stack software developer working towards the enhancement of human-computer interaction.</DescriptionSpan>
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
        </HomepageContainerDiv>
    );
};

export default HomePage;