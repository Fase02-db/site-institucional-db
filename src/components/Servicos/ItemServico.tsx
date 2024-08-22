import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
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

interface ItemProps {
  titulo: string;
  descricao: string;
}

const ItemServico: React.FC<ItemProps> = ({ titulo, descricao }) => (
  <Item>
    <h3>{titulo}</h3>
    <p>{descricao}</p>
  </Item>
);

export default ItemServico;
