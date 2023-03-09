import { EmailSVG } from "../../svg/contactSVG";
import useCopyToClipboard from "./CopyToClipboard";
import styled from "styled-components";

const EmailButton = styled.button`
    color: none;
    background: none;
    border: none;
    :hover {
        cursor: pointer;
    }
`

export const EmailButtonComponent: React.FC = () => {
    return (
        <EmailButton>
            <a href="mailto:madelinesdeo@gmail.com">
            <EmailSVG/>
            </a>
        </EmailButton>
    )
}
