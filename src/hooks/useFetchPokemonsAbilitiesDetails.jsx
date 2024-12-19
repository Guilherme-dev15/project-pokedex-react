import { useState, useEffect } from 'react';

const useFetchPokemonsAbilitiesDetails = (url) => {
    const [pokemonAbilitiesDetails, setPokemonAbilitiesDetails] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonsAbilitiesDetails = async () => {
            try {
                setLoading(true); // Set loading to true before fetching
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();
                setPokemonAbilitiesDetails(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Always set loading to false
            }
        };

        if (url) {
            fetchPokemonsAbilitiesDetails();
        }
    }, [url]); // Use 'url' as dependency

    return { pokemonAbilitiesDetails, error, loading };
};

export default useFetchPokemonsAbilitiesDetails;
