import { render } from '@testing-library/react';
import Card from './Card';

test('should rendering', () => {
  const { container } = render(
    <Card>
      <p>The Card</p>
    </Card>,
  );
  expect(container).toMatchSnapshot();
});
