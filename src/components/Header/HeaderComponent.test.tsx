import { render, screen } from '@testing-library/react'
import React from 'react'
import HeaderComponent from './HeaderComponent'

describe('Teste do Header', () => {
  test('Deve renderizar o componente do header', () => {
    render(<HeaderComponent />)
    expect(screen.getByText('Quem somos')).toBeInTheDocument()
    expect(screen.getByText('O que fazemos')).toBeInTheDocument()
    expect(screen.getByText('Clientes')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })
})
