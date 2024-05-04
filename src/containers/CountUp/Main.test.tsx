import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';
import { findByAriaLabel } from '@/lib/TestUtils/FindByAriaLabel';
import { render } from '@/lib/TestUtils/RenderMock';
import '@testing-library/jest-dom';

test('should rendering', async () => {
  const user = userEvent.setup();
  const { container } = render(<Main />);
  const buttons = screen.getAllByRole('button');
  await waitFor(() => user.click(findByAriaLabel(buttons, 'setting')));
  await waitFor(() => user.click(screen.getByRole('button', { name: 'new game' })));
  for (const _ of Array(7)) {
    await waitFor(() => user.click(findByAriaLabel(buttons, 'one')));
    await waitFor(() => user.click(findByAriaLabel(buttons, 'four')));
    await waitFor(() => user.click(findByAriaLabel(buttons, 'zero')));
    await waitFor(() => user.click(findByAriaLabel(buttons, 'enter')));
  }
  expect(screen.getByText('980')).toBeInTheDocument();
  await waitFor(() => user.click(findByAriaLabel(buttons, 'one')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'four')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'zero')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'enter')));
  expect(screen.getByText(/Total: 1120/i)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
}, 30000);
