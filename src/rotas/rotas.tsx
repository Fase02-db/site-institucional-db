import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Cases from '../pages/Cases/Cases'
import Contato from '../pages/Contato/Contato'
import Noticia from '../pages/Noticia/Noticia'
import Cliente from '../pages/Cliente/Cliente'
import QuemSomos from '../pages/QuemSomos/QuemSomos'
import HeaderComponent from '../components/Header/HeaderComponent'
import Footer from '../components/Footer/Footer'
import DelayRender from '../components/DelayRender'

const Rotas: React.FC = () => (
  <Router>
    <HeaderComponent />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/quem-somos"
        element={
          <DelayRender delay={5000}>
            <QuemSomos />
          </DelayRender>
        }
      />
      <Route path="/clientes" element={<Cliente />} />
      <Route path="/cases" element={<Cases />} />
      <Route
        path="/contato"
        element={
          <DelayRender delay={5000}>
            <Contato />
          </DelayRender>
        }
      />
      <Route
        path="/noticia"
        element={
          <DelayRender delay={5000}>
            <Noticia />
          </DelayRender>
        }
      />
    </Routes>
    <Footer />
  </Router>
)

export default Rotas
