import { render, screen } from '@testing-library/react';
import ServicosComponent from './ServicosComponent';

describe('Testes Servicos', () => {
  it('Deve renderizar os servicos', () => {
    render(<ServicosComponent />);

    expect(screen.getByText('Serviços oferecidos')).toBeInTheDocument();
    expect(screen.getByText('Métodos ágeis')).toBeInTheDocument();
    expect(screen.getByText('Scrum')).toBeInTheDocument();
    expect(screen.getByText('Transformação digital')).toBeInTheDocument();
    expect(screen.getByText('Qualidade')).toBeInTheDocument();
  });
});
