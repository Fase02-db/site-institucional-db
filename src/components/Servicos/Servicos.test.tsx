import { render, screen } from '@testing-library/react';
import Servicos from './Servicos';

describe('Testes Servicos', () => {
  it('Deve renderizar os servicos', () => {
    render(<Servicos />);

    expect(screen.getByText('Serviços oferecidos')).toBeInTheDocument();
    expect(screen.getByText('Métodos ágeis')).toBeInTheDocument();
    expect(screen.getByText('Scrum')).toBeInTheDocument();
    expect(screen.getByText('Transformação digital')).toBeInTheDocument();
    expect(screen.getByText('Qualidade')).toBeInTheDocument();
  });
});
