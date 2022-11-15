import { render } from '@testing-library/react';
import DartBoard from './DartBoard';

test('should rendering', () => {
  const onCountMock = jest.fn();
  const { container } = render(<DartBoard onCount={onCountMock} />);
  expect(container).toMatchSnapshot();
});
