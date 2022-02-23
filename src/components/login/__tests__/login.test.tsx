import React from 'react';
import { render, userEvent, screen } from '@/test-utils/renderWithProviders';

import { Login } from '../index';

describe('login test', () => {
  test('로그인 성공 테스트', async () => {
    const email = 'test@naver.com';
    const password = 'test1234';

    render(<Login />);

    const emailElem = screen.getByPlaceholderText('이메일을 입력해주세요.');
    const passwordElem =
      screen.getByPlaceholderText('비밀번호를 입력해주세요.');

    userEvent.type(emailElem, email);
    userEvent.type(passwordElem, password);

    const buttonElem = screen.getByRole('button');
    userEvent.click(buttonElem);

    const loginSuccessElem = await screen.findByText('로그인 성공!');
    expect(loginSuccessElem).toBeInTheDocument();
  });
});
