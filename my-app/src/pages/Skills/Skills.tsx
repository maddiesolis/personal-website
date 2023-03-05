import React from 'react';

export interface ISkillsPageProps {}

const SkillsPage: React.FunctionComponent<ISkillsPageProps> = (props) => {

    return (
        <div>
            <p>Skills page</p>
            <div>
                <span>Programming languages</span>
                <span>Softwares, Frameworks & Developer Tools</span>
            </div>
        </div>
    );
};

export default SkillsPage;