import React from 'react';
import { PageTitleSpan } from '../../components/GeneralSC';
import { GitSVG, LinkedinSVG } from '../../svg/contactSVG';
import { ContactDescriptionSpan, ContactPageDiv, ContactPageTitleDiv, IconsDiv, OuterContactPageDiv } from './ContactSC';
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