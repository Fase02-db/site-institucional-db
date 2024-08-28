import React from 'react';
import { render, screen } from '@testing-library/react'
import Formulario from '.'
describe('Teste Formulario', () => {
  it('Renderizar componente de formulario', () => {
    render(<Formulario/>);
    expect(screen.getByText('Entre em contato')).toBeInTheDocument();
    expect(screen.getByText(
      'Envie um e-mail através do formulário abaixo ou fale com a nossa equipe através de um dos nossos canais de atendimento.'
    )).toBeInTheDocument();
    expect(screen.getByText('Nome')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Telefone')).toBeInTheDocument();
    expect(screen.getByText('Assunto')).toBeInTheDocument();
  })
})