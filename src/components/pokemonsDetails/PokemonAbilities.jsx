import React, { useState } from 'react';
import styled from 'styled-components';
import useFetchPokemonsAbilitiesDetails from '../../hooks/useFetchPokemonsAbilitiesDetails';

// Styled components
const AbilitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
   
`;

const AbilitiesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
    gap: 1em;
    list-style-type: none;
    padding: 0;
    justify-content: center;
`;

const AbilityItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5em 0;
    font-weight: bold;

    button {
        background: none;
        border: 1px solid #cecece;
        width: 200px;
        padding: 0.5em;

        &:hover {
            background: #ffffff4f;
        }
    }
`;

const DescriptionList = styled.ul`
    list-style-type: none;
    padding-left: 20px;
    margin-top: 0.5em;
    display: ${(props) => (props.$visible ? 'block' : 'none')};
`;
// Component
export const PokemonAbilities = ({ abilities }) => {
    const [visibleAbility, setVisibleAbility] = useState(null); // Tracks which ability's description is visible

    if (!abilities || abilities.length === 0) {
        return <p>Este Pokémon não possui habilidades.</p>;
    }

    const toggleDescription = (abilityName) => {
        setVisibleAbility((prev) => (prev === abilityName ? null : abilityName));
    };

    return (
        <AbilitiesContainer>
            <h3>Lista de habilidades:</h3>
            <AbilitiesList>
                {abilities.map((ability) => {
                    const { pokemonAbilitiesDetails, error, loading } =
                        useFetchPokemonsAbilitiesDetails(ability.ability.url);

                    // Filtra apenas as descrições em inglês
                    const englishEffect =
                        pokemonAbilitiesDetails?.effect_entries.find(
                            (entry) => entry.language.name === 'en'
                        );

                    return (
                        <AbilityItem key={ability.ability.name}>
                            <button onClick={() => toggleDescription(ability.ability.name)}>
                                {ability.ability.name}
                            </button>
                            <DescriptionList $visible={visibleAbility === ability.ability.name}>

                                {loading && <li>Carregando...</li>}
                                {error && <li>Erro: {error}</li>}
                                {englishEffect ? (
                                    <li>{englishEffect.effect || 'Descrição não disponível.'}</li>
                                ) : (
                                    !loading && <li>Descrição não disponível em inglês.</li>
                                )}
                            </DescriptionList>
                        </AbilityItem>
                    );
                })}
            </AbilitiesList>
        </AbilitiesContainer>
    );
};
