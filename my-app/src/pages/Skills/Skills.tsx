import React from 'react';
import CompsCardsGrid from '../../components/CardsGrid';
import Footer from '../../components/Footer';
import { InnerPageContainer, ListCardDivGreen, ListCardDivPink, ListCardDivYellow, ListItemSpan, ListsDiv, PageSubtitleSpan, PageTitleSpan } from '../../components/GeneralSC';
import { CompsCards } from './CardsArrays';
import { SkillsDiv } from './SkillsSC';

export const SkillsPage: React.FC = (props) => {
    return (
        <InnerPageContainer 
        pagetitle='My skills' 
        description='This page outlines all of the skills I have acquired throughout my academic and professional career. Scroll down to see a detailed view of my competencies.'
        contents={
            <SkillsDiv>
            <ListsDiv>
                <ListCardDivPink>
                    <PageSubtitleSpan>Programming Languages</PageSubtitleSpan>
                    <ListItemSpan>C</ListItemSpan>
                    <ListItemSpan>Java</ListItemSpan>
                    <ListItemSpan>Python</ListItemSpan>
                    <ListItemSpan>Assembly language</ListItemSpan>
                    <ListItemSpan>SQL</ListItemSpan>
                    <ListItemSpan>R</ListItemSpan>
                    <ListItemSpan>HTML</ListItemSpan>
                    <ListItemSpan>CSS</ListItemSpan>
                    <ListItemSpan>Typescript</ListItemSpan>
                </ListCardDivPink>
                <ListCardDivYellow>
                    <PageSubtitleSpan>Softwares & Frameworks</PageSubtitleSpan>
                    <ListItemSpan>React</ListItemSpan>
                    <ListItemSpan>Git</ListItemSpan>
                    <ListItemSpan>Visual Studio Code</ListItemSpan>
                    <ListItemSpan>DataGrip</ListItemSpan>
                    <ListItemSpan>BigQuery</ListItemSpan>
                    <ListItemSpan>Storybook</ListItemSpan>
                    <ListItemSpan>Coda</ListItemSpan>
                    <ListItemSpan>Microsoft Office</ListItemSpan>
                    <ListItemSpan>Google Workspace</ListItemSpan>
                </ListCardDivYellow>
                <ListCardDivGreen>
                    <PageSubtitleSpan>Designer Tools</PageSubtitleSpan>
                    <ListItemSpan>Figma</ListItemSpan>
                    <ListItemSpan>Adobe software</ListItemSpan>
                    <ListItemSpan>Photoshop</ListItemSpan>
                    <ListItemSpan>InDesign</ListItemSpan>
                    <ListItemSpan>Illustrator Office</ListItemSpan>
                    <ListItemSpan>Premier Pro</ListItemSpan>
                    <ListItemSpan>Clip Studio</ListItemSpan>
                    <ListItemSpan>Blender</ListItemSpan>
                    <ListItemSpan>Sketchup</ListItemSpan>
                </ListCardDivGreen>
            </ListsDiv>
            <CompsCardsGrid gridtitle='Competencies' cards={CompsCards} description='Hover over a card to flip it; the back of every card contains a detailed description of that competency.'/>
        </SkillsDiv>
        }
        />
    );
};