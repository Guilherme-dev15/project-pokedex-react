import { styled } from 'styled-components';



// Função para obter estilos com base no tipo
const getTypeStyles = (type) => {
    return typeStyles[type] || typeStyles.default;
};

const List = styled.ol`
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 1em;
    list-style-type: none;
    width: 100%;
    
    /* Dispositivos muito pequenos (por exemplo, smartphones no modo retrato) */
@media (max-width: 480px) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, auto);
  
}

/* Dispositivos pequenos (smartphones maiores e pequenos tablets) */
@media (min-width: 481px) and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
}

/* Dispositivos médios (tablets e telas pequenas de laptops) */
@media (min-width: 769px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, auto);
}

/* Dispositivos grandes (laptops e desktops) */
@media (min-width: 1025px) and (max-width: 1440px) {
   display: grid;
    grid-template-columns: repeat(5, auto);
}

/* Telas muito grandes (grandes desktops e monitores) */
@media (min-width: 1441px) {
   display: grid;
    grid-template-columns: repeat(8, auto);
}
`;


{/* Card List Pokemon */ }
const ListType = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    transition: transform 200ms ease, box-shadow 200ms ease, background 200ms ease; /* Adicionando background a transição */
    padding: 1em;
    background: radial-gradient(circle, ${({ type }) => getTypeStyles(type).background}, rgba(0, 0, 0, 1));
    color: ${({ type }) => getTypeStyles(type).color};
    position: relative;
    box-shadow: 0px 4px 8px rgba(99, 99, 99, 1), 0px 8px 16px rgba(0, 0, 0, 0.2);

    cursor: pointer;

    &:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3), 0px 16px 32px rgba(0, 0, 0, 0.3);
        background: radial-gradient(circle, ${({ type }) => getTypeStyles(type).background}, rgba(99, 99, 99, 1)); /* Fundo mais escuro no hover */
    }

    a {
        font-size: 1em;
        font-weight: 600;
        color: #fff;
        text-decoration: none;
        width:100%;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    
    ul>li{
        width:100%
    }

    .detailsImg {
        display: flex;
        justify-content: center;
    }

    img {
        width: 100px;
        height: 100px;
        transition: transform 200ms ease;
        animation: jump 1s ease-in-out infinite; /* Adiciona a animação de pulo */
    }

    &:hover img {
        transform: rotate(10deg) scale(1.1);
    }

    /* Marca d'água da Pokébola */
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200px;
        height: 200px;
        background-image: url('https://i.ibb.co/T0yMwKM/5371a411dcec6342a779ea4d6ab93083.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.08;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 0;
    }

    /* Ícone de visualização que aparece no hover */
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px; /* Tamanho do ícone */
        height: 50px; /* Tamanho do ícone */
        background-image: url('https://i.ibb.co/QNBW58q/view-svgrepo-com-1.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0; /* Invisível inicialmente */
        transform: translate(-50%, -50%) scale(0.8);
        transition: opacity 200ms ease, transform 200ms ease;
        z-index: 1;
            pointer-events: none;

    }

    /* Efeito de hover para o ícone de visualização */
    &:hover::after {
        opacity: 1; /* Exibe o ícone ao passar o mouse */
        transform: translate(-50%, -50%) scale(1); /* Leve aumento no ícone */
    }

    /* Animação de pulo */
    @keyframes jump {
        0%, 100% {
            transform: translateY(0); /* Posição inicial e final no mesmo lugar */
        }
        50% {
            transform: translateY(-1px); /* Sobe 1px no meio do salto */
        }
    }
`;

{/* Item List Pokemon */ }
const ItemDetails = styled.div`
    display: flex;
    justify-content: space-between;

    li {
        list-style-type: none;
    }
`;


// Objeto que mapeia tipos de Pokémon para suas cores e estilos
const typeStyles = {
    normal: {
        background: 'rgba(182, 182, 128, 0.7)',
        color: '#f4f4f4',
    },
    grass: {
        background: 'rgba(140, 211, 91, 0.7)',
        color: '#f8fff8',
    },
    fire: {
        background: 'rgba(255, 138, 71, 0.7)',
        color: '#fff5f0',
    },
    water: {
        background: 'rgba(120, 174, 252, 0.7)',
        color: '#f4f9ff',
    },
    electric: {
        background: 'rgba(255, 220, 88, 0.7)',
        color: '#fffbe8',
    },
    ice: {
        background: 'rgba(163, 226, 228, 0.7)',
        color: '#f4ffff',
    },
    ground: {
        background: 'rgba(230, 202, 132, 0.7)',
        color: '#fffaf3',
    },
    flying: {
        background: 'rgba(181, 161, 245, 0.7)',
        color: '#f5f0ff',
    },
    poison: {
        background: 'rgba(179, 87, 179, 0.7)',
        color: '#fff3ff',
    },
    fighting: {
        background: 'rgba(217, 74, 69, 0.7)',
        color: '#fff3f3',
    },
    psychic: {
        background: 'rgba(252, 113, 141, 0.7)',
        color: '#fff5f8',
    },
    dark: {
        background: 'rgba(139, 103, 83, 0.7)',
        color: '#f2e8e4',
    },
    rock: {
        background: 'rgba(193, 173, 90, 0.7)',
        color: '#fcf8e5',
    },
    bug: {
        background: 'rgba(177, 201, 33, 0.7)',
        color: '#fbfdf0',
    },
    ghost: {
        background: 'rgba(138, 115, 187, 0.7)',
        color: '#f4f0ff',
    },
    steel: {
        background: 'rgba(209, 211, 227, 0.7)',
        color: '#f9faff',
    },
    dragon: {
        background: 'rgba(142, 97, 251, 0.7)',
        color: '#f6f0ff',
    },
    fairy: {
        background: 'rgba(255, 179, 209, 0.7)',
        color: '#fff6fb',
    },
    red: {
        background: 'rgba(255, 114, 115, 0.7)',
        color: '#fff3f3',
    },
    green: {
        background: 'rgba(126, 217, 92, 0.7)',
        color: '#f3fff3',
    },
    default: {
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#f4f4f4',
    },
};

export { List, ListType, ItemDetails, getTypeStyles };
