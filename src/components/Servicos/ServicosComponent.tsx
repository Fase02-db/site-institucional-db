import React from 'react';
import styled from 'styled-components';
import servicosData from './servicos.json';
import ListaServico from './ListaServicos';

const SectionContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const TituloSecao = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  font-family: 'TTSupermolot-Bold', sans-serif;
`;

const ServicosComponent: React.FC = () => {
  return (
    <SectionContainer>
      <TituloSecao>Serviços oferecidos</TituloSecao>
      <ListaServico servicos={servicosData} />
    </SectionContainer>
  );
};

export default ServicosComponent;