import { render } from '@testing-library/react';
import SettingHeading from './SettingHeading';

test('should rendering', () => {
  const { container } = render(<SettingHeading />);
  expect(container).toMatchSnapshot();
});
