import { Col, Row } from 'antd';
import React from 'react';
import ItemServico from './ItemInformativo';

interface Informacoes {
  titulo: string;
  descricao: string;
}

interface ListaProps {
  informacoes: Informacoes[];
}

const ListaInformacoes: React.FC<ListaProps> = ({ informacoes }) => (
  <Row gutter={[111.84, 25]}>
    {informacoes.map((informacao, index) => (
      <Col xs={24} sm={12} key={index}>
        <ItemServico titulo={informacao.titulo} descricao={informacao.descricao} />
      </Col>
    ))}
  </Row>
);

export default ListaInformacoes;
