import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import QuemSomos from "../pages/QuemSomos/QuemSomos";
import Contato from "../pages/Contato/Contato";
import Cliente from "../pages/Clientes/Clientes";
import Cases from "../pages/Cases/Cases";
import Noticia from "../pages/Noticia/Noticia";

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
