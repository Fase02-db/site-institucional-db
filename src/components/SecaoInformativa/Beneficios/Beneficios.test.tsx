import { render, screen } from '@testing-library/react';
import BeneficiosComponent from './BeneficiosComponent';

describe('Testes Servicos', () => {
  it('Deve renderizar os servicos', () => {
    render(<BeneficiosComponent />);

    expect(screen.getByText('Nossos benefícios')).toBeInTheDocument();
    expect(screen.getByText('Qualidade')).toBeInTheDocument();
    expect(screen.getByText('Métodos ágeis')).toBeInTheDocument();
    expect(screen.getByText('Design Thinking')).toBeInTheDocument();
    expect(screen.getByText('Suporte 24h')).toBeInTheDocument();
  });
});
