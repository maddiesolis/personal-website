import React from "react";
import { createGlobalStyle } from "styled-components";

export const CSSVariables = createGlobalStyle`
    :root {
        --text-size-sm: 14px;
        --text-size-rg: 16px;
        --text-size-lg: 18px;
        --text-size-xl: 20px;
        --text-size-xxl: 24px;
        --text-size-title: 54px;

        --line-height-sm: 18px;
        --line-height-rg: 20px;
        --line-height-lg: 22px;
        --line-height-xl: 24px;
        --line-height-xxl: 28px;
        --line-height-title: 74px;

        --font-color-darkest: #264653;
        --font-color-coral: #F07167;
    }
`;

