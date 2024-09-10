import {render, screen } from '@testing-library/react'
import Contato from './Contato';
describe('Teste da pagina de contato', () => {
  it('Deve renderizar os componentes da pagina de contato', () => {
    render(<Contato/>);
    const imagemTopoDaPagina = screen.getByRole('img', {name: 'imagem-topo-pagina'});
    const imagemDaFachadaDaEmpresa = screen.getByRole('img', {name: 'imagem-da-fachada-da-empresa'});
    const iconeDoTelefone = screen.getByRole('img', {name: 'imagem-icone-telefone'});
    const tituloNossoEndereço = screen.getByRole('heading', {name: 'titulo-nosso-endereço'});
    const nomeDoEstadoQueLocalizaAEmpresa = screen.getByRole('heading', {name: 'nome-do-Estado-que-localiza-a-empresa'});
    const endereçoDaEmpresa = screen.getByRole('heading', {name: 'endereço-da-empresa'});
    const telefoneDaEmpresa = screen.getByRole('heading', {name: 'telefone-da-empresa'});
    const nomeDoEstadoQueLocalizaAEmpresaFilial = screen.getByRole('heading', {name: 'nome-do-Estado-que-localiza-a-empresa-filial'});
    const enderçoDaEmpresaFilial = screen.getByRole('heading', {name: 'enderço-da-empresa-filial'});
    const telefoneDaEmpresaFilial = screen.getByRole('heading', {name: 'telefone-da-empresa-filial'});
    const tituloEntreEmContato = screen.getByRole('heading', {name: 'Entre em contato'});
    const SubTituloDaPagina = screen.getByRole('heading', {name: 'Sub-titulo-da-pagina'});
    const inputNome = screen.getByRole('textbox', {name: 'Digite-aqui-o-nome'});
    const inputTelefone = screen.getByRole('textbox', {name: 'Digite-aqui-o-Telefone'});
    const inputEmail = screen.getByRole('textbox', {name: 'Digite-aqui-o-Email'});
    const inputAssunto = screen.getByRole('textbox', {name: 'Digite-aqui-o-Assunto'});
    const inputMensagem = screen.getByRole('textbox', {name: 'Digite-aqui-a-mensagem'});
    const botaoEnviar = screen.getByRole('button', {name: 'Clique-aqui-para-enviar-o-formulario'});

    expect(imagemTopoDaPagina).toBeVisible();
    expect(imagemDaFachadaDaEmpresa).toBeVisible();
    expect(iconeDoTelefone).toBeVisible();
    expect(tituloNossoEndereço).toBeVisible();
    expect(nomeDoEstadoQueLocalizaAEmpresa).toBeVisible();
    expect(endereçoDaEmpresa).toBeVisible();
    expect(telefoneDaEmpresa).toBeVisible();
    expect(nomeDoEstadoQueLocalizaAEmpresaFilial).toBeVisible();
    expect(enderçoDaEmpresaFilial).toBeVisible();
    expect(telefoneDaEmpresaFilial).toBeVisible();
    expect(tituloEntreEmContato).toBeVisible();
    expect(SubTituloDaPagina).toBeVisible();
    expect(inputNome).toBeVisible();
    expect(inputTelefone).toBeVisible();
    expect(inputEmail).toBeVisible();
    expect(inputAssunto).toBeVisible();
    expect(inputMensagem).toBeVisible();
    expect(botaoEnviar).toBeVisible();
  });
})