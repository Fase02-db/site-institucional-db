import { render, screen, fireEvent } from '@testing-library/react'
import CardComponent from '.' // ajuste o caminho conforme necessário
import { MemoryRouter, Route, Routes } from 'react-router-dom'

const mockProps = {
  img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  titulo: 'Título do Card',
  categoria: 'Categoria Exemplo',
  resumo: 'Este é um resumo de exemplo para o card.',
  saibaMais: 'Saiba Mais',
  href: '/exemplo',
}

describe('Card Component', () => {
  test('Renderizando CardComponent com os props', () => {
    render(
      <MemoryRouter>
        <CardComponent {...mockProps} />
      </MemoryRouter>,
    )

    expect(screen.getByText('Título do Card')).toBeInTheDocument()

    expect(screen.getByText('Categoria Exemplo')).toBeInTheDocument()

    expect(
      screen.getByText('Este é um resumo de exemplo para o card.'),
    ).toBeInTheDocument()

    const button = screen.getByText('Saiba Mais')
    expect(button).toBeInTheDocument()
  })

  test('Verificando comportandomento do botão CardComponent com os props', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<CardComponent {...mockProps} />} />
          <Route
            path="/exemplo"
            element={<div>Você está na página certa</div>}
          />
        </Routes>
      </MemoryRouter>,
    )

    const link = screen.getByText('Saiba Mais')
    expect(link).toBeInTheDocument()

    fireEvent.click(link)
    expect(screen.getByText('Você está na página certa')).toBeInTheDocument()
  })
})
