import React from "react";
import { Link } from "react-router-dom";

const QuemSomos: React.FC = () => {
    return (
        <div>
            <h1>Quem somos?</h1>
            <Link to="/quem-somos"></Link>
        </div>
    );
};

export default QuemSomos;