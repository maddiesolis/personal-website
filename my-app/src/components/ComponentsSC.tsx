import styled from "styled-components";

export const LayoutDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export const PageContainerDiv = styled.div`
    height: 100%;
    border: solid;
    border-color: blue;
    background-color: lightskyblue;
`

export const NavContainerDiv = styled.div`
    display: grid;
    grid-template-columns: 25% 75%;
    align-items: center;
    background-color: yellow;
    height: 64px;
    padding: 20px;
`

export const NavMenuDiv = styled(NavContainerDiv)`
    display: flex;
    justify-content: space-between;
    background-color: orange;
    padding: 0;
`

export const FooterContainerDiv = styled.div`
    display: flex;
    justify-self: end;
    height: 120px;
    background-color: lightpink;
`