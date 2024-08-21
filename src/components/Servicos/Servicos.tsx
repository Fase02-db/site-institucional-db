import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  font-family: 'TTSupermolot-Bold', sans-serif;
`;

const ServiceCard = styled.div`
  text-align: left;
  padding: 20px;

  h3 {
    font-size: 32px;
    margin-bottom: 10px;
    font-family: 'TTSupermolot-Bold', sans-serif;
  }

  p {
    font-family: 'TTSupermolot-Regular', sans-serif;
    font-size: 18px;
    color: #292929;
  }
`;

const servicos = [
  {
    titulo: 'Métodos ágeis',
    descricao:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
  },
  {
    titulo: 'Scrum',
    descricao:
        'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  },
  {
    titulo: 'Transformação digital',
    descricao:
        'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
  },
  {
    titulo: 'Qualidade',
    descricao:
        'Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.',
  },
];

const Servicos: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>Serviços oferecidos</SectionTitle>
      <Row gutter={[111.84, 25]}>
        {servicos.map((servicos, index) => (
          <Col xs={24} sm={12} key={index}>
            <ServiceCard>
              <h3>{servicos.titulo}</h3>
              <p>{servicos.descricao}</p>
            </ServiceCard>
          </Col>
        ))}
      </Row>
    </SectionContainer>
  );
};

export default Servicos;