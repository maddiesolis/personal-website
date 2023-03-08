import React from 'react';
import CompsCardsGrid from '../../components/CardsGrid';
import { PageContainerDiv } from '../../components/ComponentsSC';
import Footer from '../../components/Footer';
import { CenteredPageDiv, InnerPageContainer, ListCardDivGreen, ListCardDivPink, ListCardDivYellow, ListItemSpan, ListsContainer, ListsDiv, PageSubtitleSpan, PageTitleSpan } from '../../components/GeneralSC';
import { CompsCards } from './CardsArrays';
import { SkillsDiv } from './SkillsSC';

const programmingLanguages = [
    "C", "Java", "Python", "Assembly language", "SQL", "R", "HTML", "CSS", "Typescript"
];

const softwaresFrameworks = [
    "React", "Git", "Visual Studio Code", "DataGrip", "BigQuery", "Storybook", "Coda", "Microsoft Office", "Google Workspace"
];

const designerTools = [
    "Figma", "Adobe software", "Photoshop", "InDesign", "Illustrator", "Premiere Pro", "Clip Studio", "Blender", "Sketchup"
]

export const SkillsPage: React.FC = (props) => {
    return (
        <PageContainerDiv>
            <InnerPageContainer 
                pagetitle='My skills' 
                description='This page outlines all of the skills I have acquired throughout my academic and professional career. Scroll down to see a detailed view of my competencies.'
                contents={
                    <CenteredPageDiv>
                        <ListsDiv>
                            <ListsContainer title="Programming Languages" items={programmingLanguages} colour="pink"/>
                            <ListsContainer title="Softwares & Frameworks" items={softwaresFrameworks} colour="yellow"/>
                            <ListsContainer title="Designer Tools" items={designerTools} colour="green"/>
                        </ListsDiv>
                        <CompsCardsGrid gridtitle='Competencies' cards={CompsCards} description='Hover over a card to flip it; the back of every card contains a detailed description of that competency.'/>
                    </CenteredPageDiv>
                }/>
        </PageContainerDiv>
    );
};