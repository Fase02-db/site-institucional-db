import React from "react";
import { Link } from "react-router-dom";

const Noticia: React.FC = () => {
    return (
        <div>
            <h1>Noticia</h1>
            <Link to="/noticias"></Link>
        </div>
    );
};

export default Noticia;