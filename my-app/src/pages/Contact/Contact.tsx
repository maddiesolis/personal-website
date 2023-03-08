import React from 'react';
import { PageContainerDiv } from '../../components/ComponentsSC';
import { InnerPageContainer } from '../../components/GeneralSC';

const ContactPage: React.FunctionComponent = () => {

    return (
        <PageContainerDiv>
        <InnerPageContainer 
            pagetitle={'Get in touch'} 
            description={"I'd love to hear from you!"} 
            contents={
            <div>

            </div>}/>
        </PageContainerDiv>
    );
};

export default ContactPage;