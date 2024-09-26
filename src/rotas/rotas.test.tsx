import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Contato from '../pages/Contato/Contato'
import Cases from '../pages/Cases/Cases'
import QuemSomos from '../pages/QuemSomos/QuemSomos'
import Noticia from '../pages/Noticia/Noticia'
import Cliente from '../pages/Cliente/Cliente'

describe('Teste Rotas', () => {
  test('deve renderizar a página Home para a rota "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>,
    )
    expect(screen.getByText('Sobre a ABC')).toBeInTheDocument()
  })
  test('deve renderizar a página Contato para a rota "/contato"', () => {
    render(
      <MemoryRouter initialEntries={['/contato']}>
        <Routes>
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </MemoryRouter>,
    )
    // expect(screen.getByText('Nossos endereços')).toBeInTheDocument()
  })
  test('deve renderizar a página Cases para a rota "/cases"', () => {
    render(
      <MemoryRouter initialEntries={['/cases']}>
        <Routes>
          <Route path="/cases" element={<Cases />} />
        </Routes>
      </MemoryRouter>,
    )
    expect(screen.getByText('Case Petlove')).toBeInTheDocument()
  })
  test('deve renderizar a página Quem Somos para a rota "/quem-somos"', () => {
    render(
      <MemoryRouter initialEntries={['/quem-somos']}>
        <Routes>
          <Route path="/quem-somos" element={<QuemSomos />} />
        </Routes>
      </MemoryRouter>,
    )
    // expect(
    //   screen.getByText('SOMOS UMA EMPRESA DE TECNOLOGIA.'),
    // ).toBeInTheDocument()
  })
  test('deve renderizar a página Noticia para a rota "/noticias"', () => {
    render(
      <MemoryRouter initialEntries={['/noticias']}>
        <Routes>
          <Route path="/noticias" element={<Noticia />} />
        </Routes>
      </MemoryRouter>,
    )
    expect(
      screen.getByText(
        'ABC fecha parceria com gigante do varejo para expandir tecnologia no setor pet',
      ),
    ).toBeInTheDocument()
  })
  test('deve renderizar a página Clientes para a rota "/clientes"', () => {
    render(
      <MemoryRouter initialEntries={['/clientes']}>
        <Routes>
          <Route path="/clientes" element={<Cliente />} />
        </Routes>
      </MemoryRouter>,
    )
    expect(screen.getByText('NÓS FAZEMOS A DIFERENÇA')).toBeInTheDocument()
  })
})
