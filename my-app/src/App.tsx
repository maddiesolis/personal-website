import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ContactPage from './pages/Contact/Contact';
import HomePage from './pages/Home/Home';
import ProjectsPage from './pages/Projects/Projects';
import { SkillsPage } from './pages/Skills/Skills';
import TimelinePage from './pages/Timeline/Timeline';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" index element={<TimelinePage />} />
                    <Route path="skills" index element={<SkillsPage />} />
                    <Route path="projects" index element={<ProjectsPage />} />
                    <Route path="contact" index element={<ContactPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Application;