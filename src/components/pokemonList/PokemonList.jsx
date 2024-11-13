import { useState, useEffect } from 'react';
import useFetchPokemons from '../../hooks/useFetchPokemons';
import { Link } from 'react-router-dom';
import PokemonImage from '../pokemonsDetails/PokemonImage';
import { List, ListType } from '../common/StyledList';
import { styled } from 'styled-components';
import PokemonType from '../pokemonsDetails/PokemonType';
import Loading from '../../layout/Loading';
import useDelayedLoading from '../../hooks/useDelayedLoading';
import useFilterPokemon from "../../hooks/useFilterPokemon";
import InputSearch from "../pokemonSearch/InputSearch";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justfy-content: center;
    align-items:center;
    margin: 2em;
    gap: 1em;
    
    img{
        margin-top: 1em;
        width: 150px;
        transition: .2s;
        &:hover{
            cursor: pointer;
            transform: scale(1.1);
        }
    }
`;

const Button = styled.button`
    max-width: 200px;
    height: 50px;
    border: none;
    background-color: rgba(140, 211, 91, 0.7);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 700ms;
    color: #FFF;
    font-size: 16px;

    &:hover {
        background-color: #FFF;
        transform: scale(1.1);
        color: rgba(140, 211, 91);
    }
`;

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1.5em;
`;

const PokemonList = () => {
    const [morePokemon, setMorePokemon] = useState(10);
    const [pokemonTypes, setPokemonTypes] = useState({});
    const [isDelayedLoading, triggerLoading] = useDelayedLoading(1500);

    // Hook para buscar todos os Pokémon
    const { loading, error, allList } = useFetchPokemons(morePokemon);

    // Hook para aplicar o filtro usando a lista completa de Pokémon
    const { searchPokemon, setSearchPokemon, filteredPokemon } = useFilterPokemon({ pokemonList: allList });

    const loadMorePokemon = () => {
        setMorePokemon((prevPokemonItems) => prevPokemonItems + 10);
        triggerLoading(); // Inicia o loading
    };

    useEffect(() => {
        if (loading) {
            triggerLoading();
        }
    }, [loading, triggerLoading]);

    // Renderização condicional baseada no estado de carregamento
    if (isDelayedLoading || loading) {
        return (
            <LoadingContainer>
                <Loading />
            </LoadingContainer>
        );
    }

    // Caso de erro
    if (error) {
        return (
            <div>
                <p>Error: {error.message || error}</p>
                <p>Please try refreshing the page or check your internet connection.</p>
            </div>
        );
    }

    const handleTypesFetched = (types, pokemonId) => {
        if (!pokemonTypes[pokemonId]) {
            setPokemonTypes((prevTypes) => ({
                ...prevTypes,
                [pokemonId]: types[0]
            }));
        }
    };

    return (
        <Section>
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo" />
            <InputSearch searchPokemon={searchPokemon} setSearchPokemon={setSearchPokemon} />
            {filteredPokemon.length === 0 ? (
                <p>No Pokémon found.</p>
            ) : (
                <List>
                    {/* Renderiza apenas os primeiros 'morePokemon' Pokémon filtrados */}
                    {filteredPokemon.slice(0, morePokemon).map((pokemon) => {
                        const pokemonId = parseInt(pokemon.url.split('/').slice(-2, -1)[0]);
                        return (
                            <ListType key={pokemonId} type={pokemonTypes[pokemonId] || ''}>
                                <Link to={`/details/${pokemonId}`}>
                                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                    <PokemonImage pokemonId={pokemonId} />
                                    <PokemonType pokemonId={pokemonId} onTypesFetched={handleTypesFetched} />
                                </Link>
                            </ListType>
                        );
                    })}
                </List>
            )}
            <Button onClick={loadMorePokemon}>Load More</Button>
        </Section>
    );
};

export default PokemonList;
