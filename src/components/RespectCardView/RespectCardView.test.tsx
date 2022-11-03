import { render } from '@testing-library/react';
import RespectCardView from './RespectCardView';

test('should rendering', () => {
  const { container } = render(
    <RespectCardView
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
