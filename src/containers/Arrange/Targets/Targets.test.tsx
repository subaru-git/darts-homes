import { render } from '@testing-library/react';
import Targets from './Targets';

test('should rendering', () => {
  const { container } = render(<Targets count={8} targets={[]} isFinished={false} />);
  expect(container).toMatchSnapshot();
});
