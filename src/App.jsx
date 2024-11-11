// src/App.js
import React from 'react';
import PokemonRoutes from './routes/PokemonRoutes';
import { createGlobalStyle } from 'styled-components';

import './App.css'
import { Header } from './pages/Header';

// Defina o estilo global fora do componente
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

function App() {
    return (
        <>
            <Header />
            <GlobalStyle />
            <PokemonRoutes />
        </>
    );
}

export default App;