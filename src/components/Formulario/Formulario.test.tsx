import React from 'react';
import { act, fireEvent, logRoles, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';


import Formulario from '.'
describe('Teste Formulario', () => {
   it('Deve renderizar os componentes do formulário', () => {
    const view = render(<Formulario/>);
    const tituloDaPagina = screen.getByRole('heading', {name: 'Entre em contato'});
    const SubTituloDaPagina = screen.getByRole('heading', {name: 'Sub-titulo-da-pagina'});
    const inputNome = screen.getByRole('textbox', {name: 'Digite-aqui-o-nome'});
    const inputTelefone = screen.getByRole('textbox', {name: 'Digite-aqui-o-Telefone'});
    const inputEmail = screen.getByRole('textbox', {name: 'Digite-aqui-o-Email'});
    const inputAssunto = screen.getByRole('textbox', {name: 'Digite-aqui-o-Assunto'});
    const inputMensagem = screen.getByRole('textbox', {name: 'Digite-aqui-a-mensagem'});
    const botaoEnviar = screen.getByRole('button', {name: 'Clique-aqui-para-enviar-o-formulario'});

    expect(tituloDaPagina).toBeVisible();
    expect(SubTituloDaPagina).toBeVisible();
    expect(inputNome).toBeVisible();
    expect(inputTelefone).toBeVisible();
    expect(inputEmail).toBeVisible();
    expect(inputAssunto).toBeVisible();
    expect(inputMensagem).toBeVisible();
    expect(botaoEnviar).toBeVisible();
    logRoles(view.container);
    
  });

  it('Deve validar que os dados enviado são os mesmos digitados pelo usuário',async () => {
    const view = render(<Formulario/>);
    const inputNome = screen.getByRole('textbox', {name: 'Digite-aqui-o-nome'});
    const inputTelefone = screen.getByRole('textbox', {name: 'Digite-aqui-o-Telefone'});
    const inputEmail = screen.getByRole('textbox', {name: 'Digite-aqui-o-Email'});
    const inputAssunto = screen.getByRole('textbox', {name: 'Digite-aqui-o-Assunto'});
    const inputMensagem = screen.getByRole('textbox', {name: 'Digite-aqui-a-mensagem'});
        
    fireEvent.change(inputNome, { target: { value: 'Jose' } });
    fireEvent.change(inputTelefone, { target: { value: '11-33224455' } });
    fireEvent.change(inputEmail, { target: { value: 'Jose@gmail.com' } });
    fireEvent.change(inputAssunto, { target: { value: 'Aprender excel' } });
    fireEvent.change(inputMensagem, { target: { value: 'Eu quero estudar na sua escola, como faço para me matricular?' } });
    
    expect(inputNome).toHaveValue('Jose');
    expect(inputTelefone).toHaveValue('11-33224455');
    expect(inputEmail).toHaveValue('Jose@gmail.com');
    expect(inputAssunto).toHaveValue('Aprender excel');
    expect(inputMensagem).toHaveValue('Eu quero estudar na sua escola, como faço para me matricular?');    
  });

})