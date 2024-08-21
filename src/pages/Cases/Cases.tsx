import React from 'react';
import { Link } from 'react-router-dom';
import Servicos from '../../components/Servicos/Servicos';

const Cases: React.FC = () => {
  return (
    <div>
      <h1>Cases</h1>
      <Servicos />
      <Link to="/cases"></Link>
    </div>
  );
};

export default Cases;