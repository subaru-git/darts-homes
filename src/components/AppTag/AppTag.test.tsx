import { render } from '@testing-library/react';
import AppTag from './AppTag';

test('should rendering', () => {
  const { container } = render(<AppTag tag='cricket' />);
  expect(container).toMatchSnapshot();
});
