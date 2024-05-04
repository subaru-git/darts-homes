import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RadioButton from './RadioButton';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', async () => {
  const MockOnChange = jest.fn();
  const user = userEvent.setup();
  const { container } = render(
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
  const single = screen.getByLabelText('single out');
  expect(single).toBeInTheDocument();
  expect(single.parentElement?.children[1].textContent).toBe('Single Out');
  await waitFor(() => user.click(single));
  expect(MockOnChange).toHaveBeenCalled();
  expect(MockOnChange.mock.calls[0][0]).toBe('single');
  const checked = container.querySelectorAll('input[checked]');
  expect(checked.length).toBe(1);
  expect(checked[0].id).toBe('radio-master');
  expect(container).toMatchSnapshot();
});
