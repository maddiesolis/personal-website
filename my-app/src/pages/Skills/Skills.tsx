import React from 'react';
import CardsGrid from '../../components/CardsGrid';
import { ListCardDivGreen, ListCardDivPink, ListCardDivYellow, ListItemSpan, ListsDiv, PageSubtitleSpan, PageTitleSpan } from '../../components/GeneralSC';
import { CompsCards } from './CompsCards';
import { SkillsDiv } from './SkillsSC';

export const SkillsPage: React.FC = (props) => {
    return (
            <SkillsDiv>
                <PageTitleSpan>My skills</PageTitleSpan>
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
                <CardsGrid gridtitle='Competencies' cards={CompsCards}/>
            </SkillsDiv>

    );
};