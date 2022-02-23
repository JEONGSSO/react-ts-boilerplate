import React from 'react';
import { render, screen, userEvent } from '@/test-utils/renderWithProviders';

import App from '@/App';

describe('Routes Test', () => {
  test('input link click', () => {
    render(<App />);

    const counterLink = screen.getByText('counter');

    expect(location.pathname).toBe('/');
    userEvent.click(counterLink);

    expect(location.pathname).toBe('/counter');
  });
});
