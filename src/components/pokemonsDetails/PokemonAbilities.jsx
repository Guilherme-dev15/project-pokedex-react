import React from 'react';
import styled from 'styled-components';

// Styled components for better appearance
const AbilitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`;

const AbilitiesList = styled.ul`
    display:flex;
    flex-wrap: wrap;
    gap: 1em;
    list-style-type: none;
    padding: 0;
`;

const AbilityItem = styled.li`
    display: flex;
    flex-direction:
    margin: 0.5em 0;
    font-weight: bold;

 button {
        background: none;
        border: 1px solid #cecece;
        width: 200px;
        padding: 0.5em; /* Added padding for better button appearance */

        &:hover {
            background: #ffffff4f;
        }
`;

const DescriptionList = styled.ul`
display: none;
    list-style-type: none;
    padding-left: 20px;
`;

export const PokemonAbilities = ({ abilities }) => {
    if (!abilities || abilities.length === 0) {
        return <p>Este Pokémon não possui habilidades.</p>;
    }

    return (
        <AbilitiesContainer>
            <h3>Lista de habilidade:</h3>
            <AbilitiesList>
                {abilities.map((ability) => (
                    <AbilityItem key={ability.ability.name}>
                        <button>{ability.ability.name}</button>
                        <DescriptionList>
                            <li>{ability.ability.description || 'Descrição não disponível.'}</li>
                        </DescriptionList>
                    </AbilityItem>
                ))}
            </AbilitiesList>
        </AbilitiesContainer>
    );
};

