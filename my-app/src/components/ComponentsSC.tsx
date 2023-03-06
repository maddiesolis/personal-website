import styled from "styled-components";
import { CSSVariables } from "../CSSVariables";
import { Link } from 'react-router-dom';
import React from "react";

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
`

export const NavContainerDiv = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    // as the screen gets smaller, fractions need to change
    align-items: center;
    height: 64px;
    padding: 20px 48px;
    position: sticky;
    top: 0;
`

export const NavMenuDiv = styled(NavContainerDiv)`
    display: flex;
    justify-content: space-between;
    padding: 0;
    gap: 48;
`

export const NavMenuLink = styled(Link)`
    text-decoration: none;
    color: #F07167;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    font-family: 'Ubuntu', sans-serif;
    :hover {
        color: #c47779;
        cursor: pointer;
    }
`

export const LogoLink = styled(NavMenuLink)`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 24px;
    line-height: 28px;
    font-weight: 900;
    width: fit-content;
`

export const NavMenuButton = styled.button`
    padding: 10px 24px;
    height: fit-content;
    width: fit-content;
    border: none;
    border-radius: 30px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    font-family: 'Ubuntu', sans-serif;
    background-color: #F07167;
    :hover {
        background-color: #c47779;
        cursor: pointer;
    }
`
export const NavMenuButtonLink = styled(NavMenuLink)`
    color: #ffffff;
    :hover {
        color: #ffffff;
        cursor: pointer;
    }
`

export const FooterContainerDiv = styled.div`
    display: flex;
    justify-self: end;
    height: 120px;
    background-color: lightpink;
`