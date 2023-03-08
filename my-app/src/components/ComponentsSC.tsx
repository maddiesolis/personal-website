import styled from "styled-components";
import { Link } from 'react-router-dom';
import React from "react";
import { PageTitleSpan } from "./GeneralSC";

export const LayoutDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    height: 100%;
    width: 100%;
`

export const PageContainerDiv = styled.div`
    height: 100%;
    padding: 2% 10%;
`
export const HomepageContainerDiv = styled(PageContainerDiv)`
    padding: 5% 10%;
`

export const NavContainerDiv = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    background-color: white;
    height: 54px;
    padding: 20px 48px;
    position: sticky;
    top: 0;
`

export const NavMenuDiv = styled(NavContainerDiv)`
    display: flex;
    justify-content: space-between;
    padding: 0;
    gap: 48px;
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
    height: 84px;
    background-color: #E76F51;
    bottom: 0;

    /* align-items: center;
    display: flex;
    justify-content: space-between;
    height: 64px;
    padding: 20px 48px;
    position: sticky;
    top: 0; */
`