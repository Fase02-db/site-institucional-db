import React from "react";
import { Link } from "react-router-dom";

const Cliente: React.FC = () => {
    return (
        <div>
            <h1>Cliente</h1>
            <Link to="/clientes"></Link>
        </div>
    );
};


export default Cliente;