import React, { useEffect } from 'react';
import useFetchPokemonsDetails from '../../hooks/useFetchPokemonsDetails';
import styled from 'styled-components';
import { getTypeStyles } from '../common/StyledList';
import useFetchTypeColor from '../../hooks/useFetchTypeColor';
import { useParams } from 'react-router-dom';

const ListType = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1em;
    background:  ${({ type }) => getTypeStyles(type).background};
    color: ${({ type }) => getTypeStyles(type).color};
`;

const PokemonType = ({ pokemonId, onTypesFetched }) => {
    const { pokemonDetails, loading, error } = useFetchPokemonsDetails(pokemonId);
    const { typeColor } = useFetchTypeColor(pokemonId); // Verifique se o id está correto para buscar a cor
    
    useEffect(() => {
        if (pokemonDetails && onTypesFetched) {
            const types = pokemonDetails.types.map((type) => type.type.name);
            if (types.length > 0) {
                onTypesFetched(types, pokemonId); // Passa os tipos e o ID do Pokémon
            }
        }
    }, [pokemonDetails, onTypesFetched, pokemonId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!pokemonDetails || !pokemonDetails.types) {
        return <p>No types available.</p>; // Mensagem para quando não há tipos
    }

    const { types } = pokemonDetails;

    return (
        <ListType>
            {types.map((type) => (
                <li key={type.type.name}>
                    <Button type={type.type.name}>
                        {type.type.name}
                    </Button>
                </li>
            ))}
        </ListType>
    );
};

export default PokemonType;