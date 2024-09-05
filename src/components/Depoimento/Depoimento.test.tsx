import { render, screen } from '@testing-library/react'
import  DepoimentoComponent  from '.'

const mockProps = {
  autor:'Saulo Henrique',
  texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deleniti quibusdam provident quis doloribus rem corporis, molestiae nihil. Incidunt ut molestiae pariatur explicabo nihil quia voluptate sint officiis omnis assumenda.',
  titulo:'Depoimento',
  img:'https://s3-alpha-sig.figma.com/img/b3d1/3e7f/6856c3724a03e0058547a82ac1662a4c?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VAPgteNbXFVp0iNLJihYlS5spYHHtjcjjHpxizhtpJXvOndbGyeVYAFCMLqjqmKmUbHqNzPsKdPSN8Ulkyncvn5BIkDXJoOP8r6YpGsBj9n2bboavFAFyzkNjiIdN1mcY8q-ZoR-Xb0eOMv-wypwlbFrOdLuCcbqmpyMBMia1O3o5wpXX0Tu6-Jph7ahzLYf2pXZauT9ojWTHAsVkw1L4DeTYiaKHYrWro2GMMT2JcDItKdoGgbyCCrDPGtVwuEh8uCk4J7F25VMKLaJE3xowUibGxeugpaYZ3VOflYBe8BInEzl~jEnfv7IGuJm6RSf1yFZ8~6QcpMCo~h5OM7k9g__'
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