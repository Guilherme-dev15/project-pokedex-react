import styled, { keyframes } from 'styled-components';

// Função para definir a cor do stroke com base no valor de statValue
const getStrokeColor = (statValue) => {
    if (statValue <= 35) return '#FF6347';     // Vermelho para valores baixos
    if (statValue <= 70) return '#FFD700';     // Amarelo para valores médios
    return '#32CD32';                          // Verde para valores altos
};

// Função para criar uma animação keyframes dinâmica com base no valor de statValue
const createProgressAnimation = (dashOffset) => keyframes`
  from {
    stroke-dashoffset: 138;
  }
  to {
    stroke-dashoffset: ${dashOffset};
  }
`;

// Styled-component para o SVG
const Svg = styled.svg`
  display: flex;
  flex-wrap: wrap;
  width: 50px;
  height: 50px;
  margin: 1em;

  [class^="meter-"] {
    fill: none;
    stroke-width: 5px;  
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  .meter-1 {
    stroke-dasharray: 138;
    stroke: ${(props) => getStrokeColor(props.statValue)}; // Define cor dinamicamente
    animation: ${(props) => createProgressAnimation(props.dashOffset)} 1s ease-out; // Animação dinâmica
  }

  .bg {
    fill: none;
    stroke-width: 5px; 
    stroke: #1A2C34;
  }

  .text {
    font-size: 10px; 
    font-weight: bold;
  }
`;

export const StatsProgress = ({ name, statValue }) => {
    const formattedName = (name === 'special-attack' || name === 'special-defense')
        ? name.charAt(0).toUpperCase() + name.charAt(1) + 
          name.charAt(8).toUpperCase() + name.slice(9, 11) 
        : name.charAt(0).toUpperCase() + name.slice(1);

    const maxStatValue = 138;
    const maxDashArray = 138;
    const dashOffset = maxDashArray * (1 - Math.min(statValue, maxStatValue) / maxStatValue);

    return (
        <div className="dashboard">
            <Svg width="50" height="50" statValue={statValue} dashOffset={dashOffset}>
                <circle className="bg" cx="25" cy="25" r="22" />
                <circle className="meter-1" cx="25" cy="25" r="22" style={{ strokeDashoffset: dashOffset }} />
                <text x="25" y="25" textAnchor="middle" dominantBaseline="middle" className="text" fill="white">
                    {formattedName}
                </text>
            </Svg>
        </div>
    );
};
