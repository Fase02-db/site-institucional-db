import { Col, Row } from 'antd';
import React from 'react';
import ServicoItem from './ServicoItem';

interface Servico {
  titulo: string;
  descricao: string;
}

interface ServicoListProps {
  servicos: Servico[];
}

const ServicoList: React.FC<ServicoListProps> = ({ servicos }) => (
  <Row gutter={[111.84, 25]}>
    {servicos.map((servico, index) => (
      <Col xs={24} sm={12} key={index}>
        <ServicoItem titulo={servico.titulo} descricao={servico.descricao} />
      </Col>
    ))}
  </Row>
);

export default ServicoList;
