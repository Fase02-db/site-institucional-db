import React from 'react';
import styled from 'styled-components';
import servicosData from './servicos.json';
import ServicoList from './ServicoList';

const SectionContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  font-family: 'TTSupermolot-Bold', sans-serif;
`;

const Servicos: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>Serviços oferecidos</SectionTitle>
      <ServicoList servicos={servicosData} />
    </SectionContainer>
  );
};

export default Servicos;