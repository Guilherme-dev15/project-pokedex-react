import { useState, useEffect } from 'react';

const useFetchPokemonsDetails = (id) => {
    const [pokemonDetails, setPokemonDetails] = useState(null); // Começa como null
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Verifica se o id é válido antes de fazer a requisição
        if (!id) return;

        const fetchPokemonsDetails = async () => {
            setLoading(true);
            setError(null); // Limpa o erro ao iniciar uma nova requisição

            const urlAPI = `https://pokeapi.co/api/v2/pokemon/${id}`;

            try {
                const response = await fetch(urlAPI);
                if (!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();
                setPokemonDetails(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonsDetails();
    }, [id]); // Adiciona o id como dependência

    return { pokemonDetails, loading, error };
};

export default useFetchPokemonsDetails;
