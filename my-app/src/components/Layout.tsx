import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import { LayoutDiv, PageContainerDiv } from './ComponentsSC';


// top navigation
// footer
// top left logo

const Layout: React.FunctionComponent = () => {
    return (
        <LayoutDiv>
            <Navbar/>
            
                <Outlet />
            
        </LayoutDiv>
    );
};

export default Layout;