import { render } from '@testing-library/react';
import EditableScoreBoard from './EditableScoreBoard';

test('should rendering', () => {
  const onChange = jest.fn();
  const { container } = render(<EditableScoreBoard score={[]} onChange={onChange} />);
  expect(container).toMatchSnapshot();
});
