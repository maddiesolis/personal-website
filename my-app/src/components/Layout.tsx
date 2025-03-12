import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { LayoutDiv, PageContainerDiv } from './ComponentsSC';

const Layout: React.FunctionComponent = () => {
    return (
        <LayoutDiv>
            <Navbar/>
                <Outlet />
        </LayoutDiv>
    );
};

export default Layout;