import React, { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const renderWithContext = (component: ReactElement) => {
  return render(<Router>{component}</Router>);
};

export * from '@testing-library/react';

// render 덮어쓰기
export { renderWithContext as render, userEvent };
