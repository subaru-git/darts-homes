import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';
import { findByAriaLabel } from '@/lib/TestUtils/FindByAriaLabel';
import { render } from '@/lib/TestUtils/RenderMock';
import '@testing-library/jest-dom';

const arrange = [
  ['17', '12 double'],
  ['10', '16 double'],
  ['3', '20 double'],
  ['4', '20 double'],
  ['13', '16 double'],
  ['6', '20 double'],
  ['7', '20 double'],
  ['16', '16 double'],
  ['9', '20 double'],
  ['18', '16 double'],
  ['11', '20 double'],
  ['12', '20 double'],
  ['13', '20 double'],
  ['14', '20 double'],
  ['15', '20 double'],
  ['16', '20 double'],
  ['17', '20 double'],
  ['18', '20 double'],
  ['19', '20 double'],
  ['20', '20 double'],
];

test('should rendering', async () => {
  const user = userEvent.setup();
  const { container } = render(<Main />);
  const buttons = screen.getAllByRole('button');
  await waitFor(() => user.click(findByAriaLabel(buttons, 'setting')));
  await waitFor(() => user.click(screen.getByRole('button', { name: 'new game' })));
  for (const [i, a] of arrange.entries()) {
    const buttons = screen.getAllByRole('button');
    await waitFor(() => user.click(findByAriaLabel(buttons, a[0])));
    await waitFor(() => user.click(findByAriaLabel(buttons, a[1])));
    if (i === arrange.length - 1) {
      expect(screen.getByText('300')).toBeInTheDocument();
      await waitFor(() => user.click(screen.getByRole('button', { name: 'round over' })));
      return;
    }
    await waitFor(() => user.click(findByAriaLabel(buttons, 'round change')));
  }
  expect(screen.getByText(/Total: 300/i)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
}, 60000);
