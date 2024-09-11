import { render, screen } from '@testing-library/react'
import HeaderComponent from './HeaderComponent'
import { MemoryRouter } from 'react-router-dom'

describe('Teste do Header', () => {
  test('Deve renderizar o componente do header', () => {
    render(
      <MemoryRouter>
        <HeaderComponent />
      </MemoryRouter>,
    )
    expect(screen.getByText('Quem somos')).toBeInTheDocument()
    expect(screen.getByText('O que fazemos')).toBeInTheDocument()
    expect(screen.getByText('Clientes')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })
})
