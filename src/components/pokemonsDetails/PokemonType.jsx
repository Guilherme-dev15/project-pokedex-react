import React, { useEffect } from 'react';
import useFetchPokemonsDetails from '../../hooks/useFetchPokemonsDetails';
import styled from 'styled-components';
import { getTypeStyles } from '../common/StyledList';

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
    padding: 0.5em 1em;
    border-radius: 5px;
    background: ${({ type }) => getTypeStyles(type).background};
    color: ${({ type }) => getTypeStyles(type).color};
    font-weight: bold;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: ${({ type }) => getTypeStyles(type).hoverBackground};
    }
`;

const LoadingMessage = styled.div`
    text-align: center;
    font-size: 1.2em;
    color: #555;
    margin-top: 1em;
`;

const ErrorMessage = styled.div`
    text-align: center;
    font-size: 1.2em;
    color: red;
    margin-top: 1em;
`;

const PokemonType = ({ pokemonId, onTypesFetched }) => {
    const { pokemonDetails, loading, error } = useFetchPokemonsDetails(pokemonId); 
    
    useEffect(() => {
        if (pokemonDetails && onTypesFetched) {
            const types = pokemonDetails.types.map((type) => type.type.name);
            if (types.length > 0) {
                onTypesFetched(types, pokemonId); // Passa os tipos e o ID do Pokémon
            }
        }
    }, [pokemonDetails, onTypesFetched, pokemonId]);

    if (loading) {
        return <LoadingMessage>Loading Pokémon types...</LoadingMessage>;
    }

    if (error) {
        return <ErrorMessage>Error: {error}</ErrorMessage>;
    }

    if (!pokemonDetails || !pokemonDetails.types) {
        return <ErrorMessage>No types available for this Pokémon.</ErrorMessage>;
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
