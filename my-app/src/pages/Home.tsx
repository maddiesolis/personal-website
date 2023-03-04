import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <p>Homepage</p>
            <p>
                <Link to="/about">Nav: About page</Link>
            </p>
            <button onClick={() => navigate('/layout/')}>Nav: Layout page</button>
        </div>
    );
};

export default HomePage;