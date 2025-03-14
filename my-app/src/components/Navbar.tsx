import React from 'react';
import { LogoLink, NavContainerDiv, NavMenuButton, NavMenuButtonLink, NavMenuDiv, NavMenuLink } from './ComponentsSC';

const Navbar: React.FunctionComponent = () => {
    return (
        <NavContainerDiv>
            <LogoLink to="/">madeline</LogoLink>
            <NavMenuDiv>
                <NavMenuLink to="/">Home</NavMenuLink>
                <NavMenuLink to="/about">About</NavMenuLink>
                <NavMenuLink to="/skills">Skills</NavMenuLink>
                <NavMenuButton><NavMenuButtonLink to="/contact">Contact</NavMenuButtonLink></NavMenuButton>
            </NavMenuDiv>
        </NavContainerDiv>
    );
};

export default Navbar;