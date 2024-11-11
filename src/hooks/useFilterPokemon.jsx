import { useState } from "react";


const useFilterPokemon = ({ pokemonList }) => {
    const [searchPokemon, setSearchPokemon] = useState('');

    // Filtra a lista de pokémons com base no texto de busca
    const filteredPokemon = pokemonList.filter((item) =>
        item.name.toLowerCase().includes(searchPokemon.toLowerCase())
    );

    return {
        searchPokemon,
        setSearchPokemon,
        filteredPokemon
    };
};

export default useFilterPokemon;
