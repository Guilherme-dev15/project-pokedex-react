// Importações sempre no topo do arquivo
import React from "react";
import styled from "styled-components";


const Input = styled.input`
    width: 300px;
    height: 30px;
    border: solid #ededede3 2px;
    border-radius: 8px;
    padding: 1em;
    font-size: 1em;
    
`
const InputSearch = ({ searchPokemon, setSearchPokemon }) => {
    return (
        <>
            <Input
                type="text"
                placeholder="Pokemon Search"
                value={searchPokemon}
                onChange={(e) => setSearchPokemon(e.target.value)}
            />
        </>
    );
};

export default InputSearch;
