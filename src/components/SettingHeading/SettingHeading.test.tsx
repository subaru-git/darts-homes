import { render } from '@testing-library/react';
import SettingHeading from './SettingHeading';

test('should rendering', () => {
  const { container } = render(<SettingHeading title={'title'} hintHeader={'hint'} hintBody={'this is hint.'} />);
  expect(container).toMatchSnapshot();
});
