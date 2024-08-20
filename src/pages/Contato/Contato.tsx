import React from 'react';
import { Link } from 'react-router-dom';

const Contato: React.FC = () => {
  return (
    <div>
      <h1>Contato</h1>
      <Link to="/contato"></Link>
    </div>
  );
};

export default Contato;