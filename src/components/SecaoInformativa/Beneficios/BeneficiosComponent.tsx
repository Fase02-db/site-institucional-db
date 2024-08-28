import React from 'react';
import styled from 'styled-components';
import beneficiosInformacoes from './beneficio.json';
import ListaInformacoes from '../ListaInformativa';

const SectionContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const TituloSecao = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  font-family: 'TTSupermolot-Bold', sans-serif;
`;

const BeneficiosComponent: React.FC = () => {
  return (
    <SectionContainer>
      <TituloSecao>Nossos benefícios</TituloSecao>
      <ListaInformacoes informacoes={beneficiosInformacoes} />
    </SectionContainer>
  );
};

export default BeneficiosComponent;