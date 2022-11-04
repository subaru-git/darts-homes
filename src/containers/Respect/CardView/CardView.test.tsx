import { render } from '@testing-library/react';
import CardView from './CardView';

test('should rendering', () => {
  const { container } = render(
    <CardView
      data={{
        companies: [
          {
            title: 'title',
            image: 'image',
            description: 'description',
            url: 'url',
            type: 'type',
          },
        ],
        professionals: [],
        youtube: [],
      }}
    />,
  );
  expect(container).toMatchSnapshot();
});
