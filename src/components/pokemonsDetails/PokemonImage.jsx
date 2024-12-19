import React from 'react';
import useFetchPokemonsDetails from '../../hooks/useFetchPokemonsDetails';

const PokemonImage = ({ pokemonId }) => {
    const { pokemonDetails, loading, error } = useFetchPokemonsDetails(pokemonId);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    if (!pokemonDetails) {
        return <p>No Pokémon found.</p>;
    }

    const { sprites, name } = pokemonDetails;

    // Extraia o nome do Pokémon aqui {/*imgPokemonSrc*/}
    const imgPokemonSrc = sprites?.other?.home?.front_default || 'caminho/para/imagem-padrao.png';


    return (
        <div className='detailsImg'>
            {/* <img src={imgPokemonSrc} alt={`${name} sprite`} /> */}
            <img src={imgPokemonSrc} alt={`${name} sprite`} />
        </div>
    );
};

export default PokemonImage;
