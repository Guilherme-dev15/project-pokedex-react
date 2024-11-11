import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchPokemonsDetails from '../../hooks/useFetchPokemonsDetails';
import { Link } from 'react-router-dom';
import PokemonImage from './PokemonImage.jsx';
import styled from 'styled-components';
const Section = styled.section`
    display: flex;
    flex-direction: column;
    justfy-content: center;
    align-items:center;
    margin: 2em;
    gap: 1em;  
`;

const ContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    justfy-content: center;
    align-items: center;
    

    gap: 1em;

    img{
        width: 100px;
    }


    ContainerDetails.div{
        display:flex;
        
    }
`

const ListMove = styled.div`
    display: flex;
    flex-direction: row;
    justfy-content: center;
    flex-wrap:wrap;
`

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
                <div>
                    {/* <PokemonImage propId={id} /> */}
                    <img src="https://placehold.co/100x100" alt="" srcset="" />
                    <li>
                        Lista de habilidades do Pokémon:
                        <ul>
                            {abilities.map((ability) => <li key={ability.ability.name}>{ability.ability.name}</li>)}
                        </ul>
                    </li>
                </div>

                <li>
                    Lista de movimentos:
                    <ListMove>
                        {moves.map((move) => <li key={move.move.name}>{move.move.name}</li>)}
                    </ListMove>
                </li>
            </ContainerDetails>
            <Link to='/'>Back to List</Link>

        </Section>
    );
};

export default PokemonDetails;
