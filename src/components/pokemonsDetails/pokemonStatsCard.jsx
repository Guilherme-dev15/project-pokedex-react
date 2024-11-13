import styled from "styled-components";
import useFetchPokemonsDetails from "../../hooks/useFetchPokemonsDetails";
import { StatsProgress } from "../../layout/StatsProgress";


const List = styled.ul`
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
    max-width: 300px;
    gap: 1em;
    
`

const StatsCard = ({ id, statValue }) => {
    const { pokemonDetails } = useFetchPokemonsDetails(id);

    if (!pokemonDetails) {
        return <p>Loading...</p>; 
    }
    const { stats } = pokemonDetails

    return (
        <>

            <List>
                {stats.map((stat) =>
                    <li key={stat.stat.name}>
                        <StatsProgress name={stat.stat.name} statValue={stat.base_stat}/>
                    </li>
                )}
            </List>
        </>
    );
}

export default StatsCard;
