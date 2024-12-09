import { useState, useEffect } from 'react';

const useFetchTypePokemons = () => {
    const [types, setTypes] = useState([]); // Lista de tipos de Pokémon
    const [isLoading, setIsLoading] = useState(true); // Estado de carregamento
    const [error, setError] = useState(null); // Estado de erro

    useEffect(() => {
        const fetchTypes = async () => {
            const urlAPI = `https://pokeapi.co/api/v2/type/`;
            try {
                setIsLoading(true); // Começa o carregamento
                const response = await fetch(urlAPI);
                if (!response.ok) throw new Error('Failed to fetch types');
                const { results } = await response.json();
                setTypes(results);
                setError(null); // Limpa o erro caso a requisição tenha sucesso
            } catch (err) {
                setError(err.message); // Define a mensagem de erro
            } finally {
                setIsLoading(false); // Termina o carregamento
            }
        };

        fetchTypes();
    }, []);
    
    return { types, isLoading, error };
};

export default useFetchTypePokemons;
