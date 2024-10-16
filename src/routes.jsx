import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'

const Rotas = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/Sobre" element={<Skills />} />
      <Route path="/Projetos" element={<Projects />} />
    </Routes>
  </>
)

export default Rotas
