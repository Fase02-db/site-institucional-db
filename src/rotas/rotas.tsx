import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Cases from '../pages/Cases/Cases'
import Contato from '../pages/Contato/Contato'
import Noticia from '../pages/Noticia/Noticia'
import Cliente from '../pages/Cliente/Cliente'
import QuemSomos from '../pages/QuemSomos/QuemSomos'
import HeaderComponent from '../components/Header/HeaderComponent'
import Footer from '../components/Footer/Footer'

const Rotas: React.FC = () => (
  <Router>
    <HeaderComponent />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/clientes" element={<Cliente />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/noticia" element={<Noticia />} />
    </Routes>
    <Footer />
  </Router>
)

export default Rotas
