import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '../';
import '@testing-library/jest-dom/extend-expect';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários', () => {
        render(<PostComment/>)

        fireEvent.change(screen.getByTestId('ta-testid'), {
            target: {
                value: 'Comentário 1'
            }
        })
        fireEvent.click(screen.getByTestId('btn-testid'))

        expect(screen.getByText('Comentário 1')).toBeInTheDocument()

        fireEvent.change(screen.getByTestId('ta-testid'), {
            target: {
                value: 'Comentário 2'
            }
        })
        fireEvent.click(screen.getByTestId('btn-testid'))

        expect(screen.getByText('Comentário 2')).toBeInTheDocument()
    })
});
