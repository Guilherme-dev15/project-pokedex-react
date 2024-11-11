import React from "react";
import useFilterPokemon from "../../hooks/useFilterPokemon";
import InputSearch from "./InputSearch";

const PokemonSearch = ({ pokemonList }) => {
    const { searchPokemon, setSearchPokemon, filteredPokemon } = useFilterPokemon({ pokemonList });

    return (
        <>
            <InputSearch searchPokemon={searchPokemon} setSearchPokemon={setSearchPokemon} />
            <ul>
                {filteredPokemon.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </>
    );
};

export default PokemonSearch;
