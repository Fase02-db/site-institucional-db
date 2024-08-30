import { render, screen } from '@testing-library/react';
import BeneficiosComponent from './BeneficiosComponent';

describe('Testes benefícios', () => {
  it('Deve renderizar os benefícios', () => {
    render(<BeneficiosComponent />);

    expect(screen.getByText('Nossos benefícios')).toBeInTheDocument();
    expect(screen.getByText('Qualidade')).toBeInTheDocument();
    expect(screen.getByText('Métodos ágeis')).toBeInTheDocument();
    expect(screen.getByText('Design Thinking')).toBeInTheDocument();
    expect(screen.getByText('Suporte 24h')).toBeInTheDocument();
  });
});
