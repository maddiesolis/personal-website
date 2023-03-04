import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutComponent from './components/Layout';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import SkillsPage from './pages/Skills';
import TimelinePage from './pages/Timeline';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutComponent />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="timeline" index element={<TimelinePage />} />
                    <Route path="skills" index element={<SkillsPage />} />
                    <Route path="projects" index element={<ProjectsPage />} />
                    <Route path="contact" index element={<ContactPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Application;