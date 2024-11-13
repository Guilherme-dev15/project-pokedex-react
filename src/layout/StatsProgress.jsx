import styled from 'styled-components';

// Função para definir a cor do stroke com base no valor de statValue
const getStrokeColor = (statValue) => { // Verde para valores altos
  if (statValue <= 35) return '#32CD32';
  if (statValue <= 70) return '#FFD700';    // Amarelo para valores médios
  return '#FF6347';                         // Vermelho para valores baixos
};

const Svg = styled.svg`
  display: flex;
  flex-wrap: wrap;
  width: 50px;
  height: 50px;
  margin: 1em;
  transition: 700ms;
  &:hover{
    cursor:pointer;
    transform: scale(1.1);
  }

  [class^="meter-"] {
    fill: none;
    stroke-width: 5px;  
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  .meter-1 {
    stroke-dasharray: 138;
    stroke: ${(props) => getStrokeColor(props.$statValue)}; // Usando $ para filtrar a prop
    animation: progress-1 1s ease-out forwards; // Add 'forwards' to maintain the end state
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

  @keyframes progress-1 {
    from {
      stroke-dashoffset: 138;
    }

    to {
      stroke-dashoffset: ${(props) => props.$dashOffset}; // Usando $ para filtrar a prop
    }
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
      <Svg width="50" height="50" $statValue={statValue} $dashOffset={dashOffset}>
        <circle className="bg" cx="25" cy="25" r="22" />
        <circle className="meter-1" cx="25" cy="25" r="22" />
        <text x="25" y="25" textAnchor="middle" dominantBaseline="middle" className="text" fill="white">
          {formattedName}
        </text>
      </Svg>
    </div>
  );
};