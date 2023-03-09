import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainerDiv } from '../../components/ComponentsSC';
import { InnerPageContainer, PageTitleDiv, PageTitleSpan } from '../../components/GeneralSC';
import { EmailSVG, GitSVG, LinkedinSVG } from '../../svg/contactSVG';
import { DescriptionSpan } from '../Home/HomeSC';
import { ContactDescriptionSpan, ContactPageDiv, ContactPageTitleDiv, IconsDiv, OuterContactPageDiv } from './ContactSC';
import CopyToClipboard from 'react-copy-to-clipboard';
import { EmailButtonComponent } from './EmailButton';

export const ContactPage: React.FunctionComponent = () => {
    return (
        <OuterContactPageDiv>
            <ContactPageDiv>
                <ContactPageTitleDiv>
                    <PageTitleSpan>Get in touch</PageTitleSpan>
                    <ContactDescriptionSpan>I’d love to connect with you! Please feel free to reach out using any of the platforms listed below.</ContactDescriptionSpan>
                </ContactPageTitleDiv>
                <IconsDiv>
                    <GitSVG/>
                    <LinkedinSVG/>
                    <EmailButtonComponent/>
                </IconsDiv>
                
            </ContactPageDiv>
        </OuterContactPageDiv>
    );
};

export default ContactPage;