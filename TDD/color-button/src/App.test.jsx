import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
import App from './App';

describe('App', () => {
    test('버튼이 제대로 잘 작동하고 있습니까?', async () => {
        const user = userEvent.setup();
        render(<App />);

        const button = screen.getByRole('button', { name: 'change to blue!' });
        expect(button).toHaveStyle({ backgroundColor: 'rgb(255, 0, 0)' });

        await user.click(button);
        // fireEvent.click(button);

        expect(button).toHaveStyle({ backgroundColor: 'rgb(0, 0, 255)' });
        expect(button.textContent).toBe('change to red!');
    });
});