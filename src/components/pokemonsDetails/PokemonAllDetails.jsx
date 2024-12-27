import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchPokemonsDetails from '../../hooks/useFetchPokemonsDetails';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StatsCard from './pokemonStatsCard';
import { PokemonMoves } from './pokemonMoves';
import { PokemonAbilities } from './PokemonAbilities';
import PokemonImage from './PokemonImage';
import imageBack from '../../assets/back.png';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2em;
    gap: 1em;

    a {
        text-decoration: none;
    }

    .link {
        text-decoration: none;
        color: rgba(132, 218, 74, 0.7);
        font-weight: 700;
        font-size: 18px;

        &:hover {
            color: rgba(172, 224, 137, 0.7);
        }

        display: flex; /* Align image and text */
        align-items: center; /* Center vertically */
    }
`;

const ContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;

    img {
        width: 250px;
    }
`;

const DivHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
                    <PokemonImage pokemonId={id} />
                    <StatsCard id={id} />
                </DivHeader>

                <div>
                    <PokemonAbilities abilities={abilities} />
                </div>

                <div>
                    <PokemonMoves moves={moves} />
                </div>
            </ContainerDetails>
            <Link to="/" className="link">
                <img src={imageBack} alt="Back" style={{ marginRight: '8px', width: '24px', height: '24px' }} />
                Back to List
            </Link>
        </Section>
    );
};

export default PokemonDetails;