import React from 'react';
import { Link } from 'react-router-dom';
import BeneficiosComponent from '../../components/SecaoInformativa/Beneficios/BeneficiosComponent';

const QuemSomos: React.FC = () => {
  return (
    <div>
      <h1>Quem somos?</h1>
      <BeneficiosComponent />
      <Link to="/quem-somos"></Link>
    </div>
  );
};

export default QuemSomos;