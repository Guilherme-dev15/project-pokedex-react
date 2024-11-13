import styled from "styled-components";


const MovesContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    
    padding: 1em;
    gap: 2em;

    max-width: 700px;

`;

const ListMove = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 1em;
`;

const Items = styled.li`
    button {
        background: none;
        color: white;
        border: 1px solid #cecece;
        width: 200px;
        padding: 0.5em; /* Added padding for better button appearance */

        &:hover {
            background: #ffffff4f;
        }
    }
`;

export const PokemonMoves = ({ moves }) => {
    
    const limitedMoves = moves.slice(0, 9);

    return (
        <MovesContainer>
            <h3>Lista de movimentos:</h3>
            <ListMove>
                {limitedMoves.map((move) => (
                    <Items key={move.move.name}>
                        <button>{move.move.name}</button>
                    </Items>
                ))}
            </ListMove>
        </MovesContainer>
    );
};