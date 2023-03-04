import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
    const { number } = useParams();

    return (
        <div>
            <p>About page</p>
        </div>
    );
};

export default AboutPage;