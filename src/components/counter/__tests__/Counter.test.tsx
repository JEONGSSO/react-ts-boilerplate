import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { Counter } from '../index';

/**
 * @jest-environment jsdom
 */

describe('카운터 앱', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  test('increment Click Event Call', () => {
    const increButton = screen.getByText('+');

    fireEvent.click(increButton);
    const label = screen.getByRole('display-count');

    expect(Number(label.textContent)).toBe(1);
  });

  test('decrement Click Event Call', () => {
    const increButton = screen.getByText('-');

    fireEvent.click(increButton);
    const label = screen.getByRole('display-count');

    expect(Number(label.textContent)).toBe(-1);
  });
});
