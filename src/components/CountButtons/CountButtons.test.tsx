import { fireEvent, render, screen } from '@testing-library/react';
import CountButtons from './CountButtons';

test('should rendering and clickable input', () => {
  const mockOnCount = jest.fn();
  const { container } = render(<CountButtons onCount={mockOnCount} buttons={[1, 2, 3]} />);
  fireEvent.click(screen.getByText('Outer Bull'));
  expect(mockOnCount).toBeCalledTimes(1);
  expect(container).toMatchSnapshot();
});

test('should rendering and disable input', () => {
  const mockOnCount = jest.fn();
  const { container } = render(
    <CountButtons onCount={mockOnCount} buttons={[20, 19, 18]} disabled />,
  );
  fireEvent.click(screen.getByText('Outer Bull'));
  expect(mockOnCount).toBeCalledTimes(0);
  expect(container).toMatchSnapshot();
});

test('should rendering only cricket numbers', () => {
  const mockOnCount = jest.fn();
  const { container } = render(
    <CountButtons onCount={mockOnCount} buttons={[20, 19, 18, 17, 16, 15]} disabled />,
  );
  expect(screen.queryAllByText('Outer Bull')).toHaveLength(1);
  expect(screen.queryAllByText('15')).toHaveLength(3);
  expect(screen.queryAllByText('14')).toHaveLength(0);
  expect(container).toMatchSnapshot();
});
