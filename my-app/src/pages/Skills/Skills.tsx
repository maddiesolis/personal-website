import React from 'react';
import CardsGrid from '../../components/CardsGrid';
import { BasicCardDiv, BlueBoxDiv, CardsLayoutDiv, PageSubtitleSpan } from '../../components/GeneralSC';
import { CompsCards } from './CompsCards';
import { SkillsDiv } from './SkillsSC';

export const SkillsPage: React.FC = (props) => {
    return (
            <SkillsDiv>
                <CardsGrid gridtitle='Competencies' cards={CompsCards}/>
            </SkillsDiv>

    );
};