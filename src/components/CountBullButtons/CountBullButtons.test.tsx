import { fireEvent, render } from '@testing-library/react';
import CountBullButtons from './CountBullButtons';

test('should rendering and clickable input', () => {
  const mockOnScore = jest.fn();
  const { container } = render(<CountBullButtons onCount={mockOnScore} />);
  fireEvent.click(container.querySelector('button')!);
  expect(mockOnScore).toBeCalledTimes(1);
  expect(container).toMatchSnapshot();
});

test('should rendering and disable input', () => {
  const mockOnScore = jest.fn();
  const { container } = render(<CountBullButtons onCount={mockOnScore} disabled />);
  fireEvent.click(container.querySelector('button')!);
  expect(mockOnScore).toBeCalledTimes(0);
  expect(container).toMatchSnapshot();
});
