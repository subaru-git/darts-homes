import CopyToClipboardButton from './CopyToClipboardButton';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<CopyToClipboardButton />);
  expect(container).toMatchSnapshot();
});
