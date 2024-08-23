import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Teste do Footer', () => {
  it('Deve renderizar o Footer', async () => {
    render(<Footer />);
    expect(await screen.findByText('Todos os Direitos Reservados')).toBeInTheDocument();
  });
});