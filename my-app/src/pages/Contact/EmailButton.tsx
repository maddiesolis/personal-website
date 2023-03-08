import { EmailSVG } from "../../svg/contactSVG";
import useCopyToClipboard from "./CopyToClipboard";
import styled from "styled-components";


// export default function Component() {
//   const [value, copy] = useCopyToClipboard()
//   return (
//     <>
//       <h1>Click to copy:</h1>
//       <div style={{ display: 'flex' }}>
//         <button onClick={() => copy('A')}>A</button>
//         <button onClick={() => copy('B')}>B</button>
//         <button onClick={() => copy('C')}>C</button>
//       </div>
//       <p>Copied value: {value ?? 'Nothing is copied yet!'}</p>
//     </>
//   )
// }


const EmailButton = styled.button`
    color: none;
    background: none;
    border: none;
    :hover {
        cursor: pointer;
    }
`

export function EmailCopyToClipboard() {
    const [value, copy] = useCopyToClipboard()
    return (
        <>
        <EmailButton onClick={() => copy('madelinesdeo@gmail.com')}>
            <EmailSVG/>
        </EmailButton>
        </>
    )
}
