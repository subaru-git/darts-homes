import { screen } from '@testing-library/react';
import Description from './Description';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<Description />);
  expect(screen.getByAltText('description image')).not.toBeNull();
  expect(container).toMatchSnapshot();
});
