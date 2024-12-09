import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetchPokemons from '../../hooks/useFetchPokemons';
import useFilterPokemon from '../../hooks/useFilterPokemon';
import useDelayedLoading from '../../hooks/useDelayedLoading';
import InputSearch from '../pokemonSearch/InputSearch';
import SelectType from '../PokemonSelectType/SelectType';
import PokemonImage from '../pokemonsDetails/PokemonImage';
import PokemonType from '../pokemonsDetails/PokemonType';
import Loading from '../../layout/Loading';
import { List, ListType } from '../common/StyledList';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2em;
    gap: 1em;

    img {
        margin-top: 1em;
        width: 150px;
        transition: 0.2s;
        &:hover {
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
    color: #fff;
    font-size: 16px;

    &:hover {
        background-color: #fff;
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
    const [selectedType, setSelectedType] = useState('');
    const [filteredPokemon, setFilteredPokemon] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState({});
    const [isDelayedLoading, triggerLoading] = useDelayedLoading(1500);

    const { loading, error, allList } = useFetchPokemons(morePokemon);
    const { searchPokemon, setSearchPokemon } = useFilterPokemon({ pokemonList: allList });

    const loadMorePokemon = () => {
        setMorePokemon((prev) => prev + 10);
        triggerLoading();
    };

    const handleTypesFetched = useCallback((types, pokemonId) => {
        if (!pokemonTypes[pokemonId]) {
            setPokemonTypes((prevTypes) => ({
                ...prevTypes,
                [pokemonId]: types[0],
            }));
        }
    }, [pokemonTypes]);

    // Efeito para definir filteredPokemon quando os dados são carregados
    useEffect(() => {
        if (loading) {
            return; // Não faça nada se ainda estiver carregando
        }

        // Quando os dados são carregados, defina o filteredPokemon
        if (allList.length > 0) {
            setFilteredPokemon(allList); // Define todos os Pokémon inicialmente
        }
    }, [loading, allList]);

    useEffect(() => {
        const fetchFilteredByType = async () => {
            if (selectedType) {
                // Se há um tipo selecionado, busca na API
                try {
                    const url = `https://pokeapi.co/api/v2/type/${selectedType}`;
                    const response = await fetch(url);
                    if (!response.ok) throw new Error('Failed to fetch Pokemon by type');
                    const data = await response.json();
    
                    const typeFilteredPokemon = data.pokemon.map((p) => ({
                        name: p.pokemon.name,
                        url: p.pokemon.url,
                    }));
    
                    // Filtra pelo nome e aplica o limite de exibição
                    setFilteredPokemon(() => 
                        typeFilteredPokemon
                            .filter((pokemon) =>
                                pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
                            )
                            .slice(0, morePokemon)
                    );
                } catch (error) {
                    console.error('Error fetching Pokemon by type:', error);
                }
            } else {
                // Sem tipo selecionado, aplica apenas a busca no allList
                setFilteredPokemon(() => 
                    allList
                        .filter((pokemon) =>
                            pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
                        )
                        .slice(0, morePokemon)
                );
            }
        };
    
        fetchFilteredByType(); // Executa a função ao carregar ou ao mudar os estados dependentes
    }, [selectedType, searchPokemon, morePokemon]); // Remove `allList` da dependência
    

    useEffect(() => {
        if (loading && !isDelayedLoading) {
            triggerLoading();
        }
    }, [loading, isDelayedLoading, triggerLoading]);

    if (isDelayedLoading || loading) {
        return (
            <LoadingContainer>
                <Loading />
            </LoadingContainer>
        );
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message || error}</p>
                <p>Please try refreshing the page or check your internet connection.</p>
            </div>
        );
    }

    return (
        <Section>
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo" />
            <InputSearch searchPokemon={searchPokemon} setSearchPokemon={setSearchPokemon} />
            <SelectType selected={selectedType} onTypeChange={setSelectedType} />

            {filteredPokemon.length === 0 ? (
                <p>No Pokémon found.</p>
            ) : (
                <List>
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