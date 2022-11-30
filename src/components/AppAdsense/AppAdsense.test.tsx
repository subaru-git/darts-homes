import AppAdsense from './AppAdsense';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<AppAdsense />);
  expect(container).toMatchSnapshot();
});
