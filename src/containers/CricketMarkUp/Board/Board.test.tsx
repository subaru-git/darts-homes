import { screen } from '@testing-library/react';
import Board from './Board';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<Board scores={[{ number: 20, count: 10, total: 5 }]} />);
  expect(screen.getAllByText('20')).toHaveLength(1);
  expect(container).toMatchSnapshot();
});
