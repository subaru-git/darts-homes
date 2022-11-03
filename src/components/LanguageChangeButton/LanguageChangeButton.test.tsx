import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LanguageChangeButton from './LanguageChangeButton';

jest.mock(
  'next/link',
  () =>
    ({ children }: React.PropsWithChildren) =>
      children,
);
test('should rendering', () => {
  const { container } = render(<LanguageChangeButton />);
  expect(screen.getByRole('button')).not.toBeNull();
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByText('日本語')).not.toBeNull();
  fireEvent.click(screen.getByText('日本語'));
  expect(container).toMatchSnapshot();
});
