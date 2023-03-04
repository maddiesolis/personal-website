import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export interface ILayoutComponentProps {}

const LayoutComponent: React.FunctionComponent<ILayoutComponentProps> = (props) => {
    return (
        <>
            <p>Site Layout</p>
            <Link to="/">Home</Link>
            <Link to="/timeline">Timeline</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <div style={{ border: 2, borderColor: 'blue', borderStyle: 'solid', padding: 20, margin: 20, width: 'auto', height: 'auto' }}>
                <Outlet />
            </div>
        </>
    );
};

export default LayoutComponent;