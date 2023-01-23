import { render, screen } from '@testing-library/react';
import RoundBoard from './RoundBoard';

test('should rendering', () => {
  const { container } = render(<RoundBoard score={[['T20', 'T19', 'T18']]} />);
  expect(screen.getAllByText('T20')).toHaveLength(1);
  expect(screen.getAllByText('T19')).toHaveLength(1);
  expect(screen.getAllByText('T18')).toHaveLength(1);
  expect(container).toMatchSnapshot();
});
