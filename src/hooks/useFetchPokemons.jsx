// useFetchPokemons.js
import { useState, useEffect } from 'react';

const useFetchPokemons = (limit) => {

    
    const [pokemonList, setPokemonList] = useState([]);
    const [allList, setAllList] = useState([]); // Lista completa de Pokémon
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            setError(null);
            const urlAPI = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`;

            try {
                const response = await fetch(urlAPI);
                if (!response.ok) throw new Error('Failed to fetch data');
                const { results } = await response.json();
                setPokemonList(results);

                // Carrega a lista completa de Pokémon (1302 no total) uma vez
                if (allList.length === 0) {
                    const fullResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302`);
                    if (!fullResponse.ok) throw new Error('Failed to fetch complete data');
                    const { results: fullResults } = await fullResponse.json();
                    setAllList(fullResults);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, [limit, allList.length]);

    return { pokemonList, loading, error, allList };
};

export default useFetchPokemons;
