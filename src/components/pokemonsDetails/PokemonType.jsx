// PokemonType.js
import React, { useEffect } from 'react';
import useFetchPokemonsDetails from '../../hooks/useFetchPokemonsDetails';
import styled from 'styled-components';
<link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400&display=swap" rel="stylesheet"></link>

const ListType = styled.li`
    font-family: "Barlow", sans-serif;
    font-weight: 500;
    font-style: normal;
    color: #c3c3c3;
    padding: 1px;
`

const PokemonType = ({ pokemonId, onTypesFetched }) => {
    const { pokemonDetails, loading, error } = useFetchPokemonsDetails(pokemonId);

    useEffect(() => {
        if (pokemonDetails && onTypesFetched) {
            const types = pokemonDetails.types.map(type => type.type.name);
            onTypesFetched(types, pokemonId); // Passa os tipos e o ID do Pokémon
        }
    }, [pokemonDetails, onTypesFetched, pokemonId]);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    const { types } = pokemonDetails;

    return (
        <ul>
            {types.map((type) => (
                <ListType key={type.type.name}>{type.type.name}</ListType>
            )
            )}

        </ul>
    );
}

export default PokemonType;