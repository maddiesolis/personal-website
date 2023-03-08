import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ContactPage from './pages/Contact/Contact';
import HomePage from './pages/Home/Home';
import ProjectsPage from './pages/Projects/Projects';
import { SkillsPage } from './pages/Skills/Skills';
import AboutPage from './pages/About/About';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="skills" element={<SkillsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Application;