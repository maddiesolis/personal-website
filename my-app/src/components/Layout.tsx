import React from 'react';
import { Outlet } from 'react-router-dom';

export interface ILayoutComponentProps {}

const LayoutComponent: React.FunctionComponent<ILayoutComponentProps> = (props) => {
    return (
        <div style={{ border: 2, borderColor: 'blue', borderStyle: 'solid', padding: 20, margin: 20, width: 'auto', height: 'auto' }}>
            <Outlet />
        </div>
    );
};

export default LayoutComponent;