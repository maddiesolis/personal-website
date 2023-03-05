import React from 'react';
import { CurrentStatusDiv, TimelineDiv } from './TimelineSC';

export interface ITimelinePageProps {}

const TimelinePage: React.FunctionComponent<ITimelinePageProps> = (props) => {

    return (
        <TimelineDiv>
            <span>Timeline page</span>
            <CurrentStatusDiv>
                <span>Right now, I am</span>
                <span>In my third year at UVic completing the Computer Science and Visual Arts Combined Major Program</span>
                <span>Working part-time at SaaSquatch as a product analyst</span>
            </CurrentStatusDiv>
            <div>Timeline</div>
        </TimelineDiv>
    );
};

export default TimelinePage;