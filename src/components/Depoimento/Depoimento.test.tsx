import { render, screen } from '@testing-library/react'
import  DepoimentoComponent  from '.'

const mockProps = {
    autor:'Saulo Henrique',
    texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deleniti quibusdam provident quis doloribus rem corporis, molestiae nihil. Incidunt ut molestiae pariatur explicabo nihil quia voluptate sint officiis omnis assumenda.',
    titulo:'Depoimento',
    img:'./imagens/fotoExemplo.jfif'
}
describe('Teste Depoimento',()=>{
  it('Renderizar componente de depoimento',() => {
    render(<DepoimentoComponent {...mockProps}/>);
    expect(screen.getByText('Depoimento')).toBeInTheDocument();
    expect(screen.getByText('Saulo Henrique')).toBeInTheDocument();
    expect(screen.getByText(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deleniti quibusdam provident quis doloribus rem corporis, molestiae nihil. Incidunt ut molestiae pariatur explicabo nihil quia voluptate sint officiis omnis assumenda.'
    )).toBeInTheDocument();
  })
})