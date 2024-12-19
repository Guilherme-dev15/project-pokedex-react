import gitWhite from '../assets/githubBlack.svg'
import gitBlack from '../assets/githubWhite.svg'

import linkedin from '../assets/linkedin.svg'
import linkedinWhite from '../assets/linkedinWhite.svg'


import Button from '../components/Buttons/Button'
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeToggle';
import styled from 'styled-components';


const Img = styled.img`
    width:32px;
`

export const SocialMedia = () => {
    const { isDarkTheme} = useContext(ThemeContext);

    return (
        <>
            <Button>
                <a href="https://github.com/Guilherme-dev15" target='_blank' rel="noopener noreferrer">
                    {isDarkTheme ? <Img src={gitBlack} alt="GitHub Black" /> : <Img src={gitWhite} alt="GitHub White" />}
                </a>
            </Button>

            <Button>
                <a href="https://www.linkedin.com/in/guilherme-a-anjos/" target='_blank' rel="noopener noreferrer">
                    {isDarkTheme ? <Img src={linkedinWhite} alt="Linkedin White" /> : <Img src={linkedin} alt="Linkedin Black" />}
                </a>
            </Button>
        </>
    )
}
