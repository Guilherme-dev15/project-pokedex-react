import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchPokemonsDetails from '../../hooks/useFetchPokemonsDetails';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StatsCard from './pokemonStatsCard';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2em;
    gap: 1em;
`;

const ContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;

    img {
        width: 100px;
    }
`;

const ListMove = styled.ul`  /* changed from div to ul */
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
`;

const DivHeader = styled.div`
    display: flex;
    gap: 1em;

    ul {
        list-style-type: none;
    }
`;

const PokemonDetails = () => {
    const { id } = useParams();
    const { pokemonDetails, loading, error } = useFetchPokemonsDetails(id);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!pokemonDetails) {
        return <p>No Pokémon found.</p>;
    }

    const { name, abilities, moves } = pokemonDetails;

    return (
        <Section>
            <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
            <ContainerDetails>
                <DivHeader>
                    <img src="https://placehold.co/100x100" alt={`${name} sprite`} />
                    <StatsCard id={id} />
                </DivHeader>

                <div>
                    <h3>Lista de habilidades do Pokémon:</h3>
                    <ul>
                        {abilities.map((ability) => (
                            <li key={ability.ability.name}>{ability.ability.name}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Lista de movimentos:</h3>
                    <ListMove>
                        {moves.map((move) => (
                            <li key={move.move.name}>{move.move.name}</li>
                        ))}
                    </ListMove>
                </div>
            </ContainerDetails>
            <Link to="/">Back to List</Link>
        </Section>
    );
};

export default PokemonDetails;
