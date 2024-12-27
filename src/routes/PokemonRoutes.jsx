import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PokemonAllDetails from '../components/pokemonsDetails/PokemonAllDetails'
import Home from '../pages/Home'

const PokemonRoutes = () => {
    return (
        <Router basename="/project-pokedex-react">  {/* Adiciona o basename aqui */}
            <Routes>
                <Route path="/details/:id" element={<PokemonAllDetails />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default PokemonRoutes
