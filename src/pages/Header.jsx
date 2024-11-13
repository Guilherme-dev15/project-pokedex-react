import React from "react";
import { ThemeProvider } from '../contexts/ThemeToggle';
import ThemeToggle from '../components/themeToggle/ThemeToggleButton';
import styled from "styled-components";
import { SocialMedia } from "../layout/SocialMediaButtons";


const HeaderToggle = styled.header`
display:flex;
justify-content: flex-end;
align-items:center;
padding: 1em;
position: sticky;
top: 0;
`

export const Header = (() => {

    return (
        <ThemeProvider>
            <HeaderToggle>
                <SocialMedia />
                <ThemeToggle />
            </HeaderToggle>
        </ThemeProvider>
    )
})