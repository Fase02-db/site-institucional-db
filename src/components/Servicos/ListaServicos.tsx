import { Col, Row } from 'antd';
import React from 'react';
import ItemServico from './ItemServico';

interface Servico {
  titulo: string;
  descricao: string;
}

interface ListaServicoProps {
  servicos: Servico[];
}

const ListaServico: React.FC<ListaServicoProps> = ({ servicos }) => (
  <Row gutter={[111.84, 25]}>
    {servicos.map((servico, index) => (
      <Col xs={24} sm={12} key={index}>
        <ItemServico titulo={servico.titulo} descricao={servico.descricao} />
      </Col>
    ))}
  </Row>
);

export default ListaServico;
