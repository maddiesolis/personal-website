import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainerDiv, NavMenuDiv } from './StyledComponents';

const Navbar: React.FunctionComponent = () => {
    return (
        <NavContainerDiv>
            <div>
                <Link to="/">Logo</Link>
            </div>
            <NavMenuDiv>
                <Link to="/">Home</Link>
                <Link to="/timeline">Timeline</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </NavMenuDiv>
        </NavContainerDiv>
    );
};

export default Navbar;