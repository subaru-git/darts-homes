import { render } from '@testing-library/react';
import Card from './Card';

test('should rendering', () => {
  const { container } = render(
    <Card
      data={{
        title: 'title',
        image: 'image',
        description: 'description',
        url: 'url',
        type: 'type',
      }}
    />,
  );
  expect(container).toMatchSnapshot();
});
