import React from 'react';
import styled from 'styled-components';
import ListaInformacoes from '../SecaoInformativa/ListaInformativa';
import servicosInformacoes from './servicos.json';

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
      <ListaInformacoes informacoes={servicosInformacoes} />
    </SectionContainer>
  );
};

export default ServicosComponent;