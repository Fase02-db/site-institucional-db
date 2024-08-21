import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Cases from '../pages/Cases/Cases';
import Contato from '../pages/Contato/Contato';
import Noticia from '../pages/Noticia/Noticia';
import Cliente from '../pages/Cliente/Cliente';
import QuemSomos from '../pages/QuemSomos/QuemSomos';

const Rotas: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/clientes" element={<Cliente />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/noticias" element={<Noticia />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas