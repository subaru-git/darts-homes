import { render } from '@testing-library/react';
import RecordingMark from './RecordingMark';

test('should rendering', () => {
  const { container } = render(<RecordingMark />);
  expect(container).toMatchSnapshot();
});
