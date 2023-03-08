import styled from "styled-components";
import { PageContainerDiv } from "../../components/ComponentsSC";
import { DescriptionSpan } from "../Home/HomeSC";

export const OuterContactPageDiv = styled(PageContainerDiv)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0;
`
export const ContactPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`
export const ContactPageTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const ContactDescriptionSpan = styled(DescriptionSpan)`
    text-align: center;
`
export const IconsDiv = styled.div`
    display: flex;
    /* width: 45%; */
    gap: 40px;
`

