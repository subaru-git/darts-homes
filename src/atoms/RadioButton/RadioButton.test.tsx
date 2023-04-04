import RadioButton from './RadioButton';
import { render } from '@/lib/TestUtils/RenderMock';
import '@testing-library/jest-dom';

test('should rendering', () => {
  const MockOnChange = jest.fn();
  const { getByLabelText, container } = render(
    <RadioButton
      values={[
        { value: 'single', label: 'Single Out', ariaLabel: 'single out' },
        { value: 'double', label: 'Double Out' },
        { value: 'master', label: 'Master Out' },
      ]}
      defaultValue='master'
      onChange={MockOnChange}
    />,
  );
  const single = getByLabelText('single out');
  expect(single).toBeInTheDocument();
  expect(single.parentElement?.children[1].textContent).toBe('Single Out');
  single.click();
  expect(MockOnChange.mock.calls[0][0]).toBe('single');
  const checked = container.querySelectorAll('input[checked]');
  expect(checked.length).toBe(1);
  expect(checked[0].id).toBe('radio-master');
  expect(container).toMatchSnapshot();
});
