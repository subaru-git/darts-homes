import CardView from './CardView';
import { render } from '@/lib/TestUtils/RenderMock';

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
