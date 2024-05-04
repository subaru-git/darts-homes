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
  for (const i of [...Array(19)].map((_, i) => i + 1)) {
    const target = screen.getByRole('button', { name: `${i} double` });
    await waitFor(() => user.click(target));
    await waitFor(() => user.click(target));
    await waitFor(() => user.click(target));
    await waitFor(() => user.click(findByAriaLabel(buttons, 'round change')));
  }
  expect(screen.getByText('285')).toBeInTheDocument();
  const target = screen.getByRole('button', { name: '20 double' });
  await waitFor(() => user.click(target));
  await waitFor(() => user.click(target));
  await waitFor(() => user.click(target));
  await waitFor(() => user.click(screen.getByRole('button', { name: 'round over' })));
  expect(screen.getByText(/Total: 300/i)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
}, 60000);
