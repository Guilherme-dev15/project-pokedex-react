// src/components/ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeToggle';
import Button from '../Buttons/Button';
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Button onClick={toggleTheme}>
        {isDarkTheme ? <img src={sun} alt="Light Sun" /> : <img src={moon} alt="Dark Moon" />}
      </Button>

    </>
  );
};

export default ThemeToggle;