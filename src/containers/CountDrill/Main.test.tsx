import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';
import { findByAriaLabel } from '@/lib/TestUtils/FindByAriaLabel';
import { render } from '@/lib/TestUtils/RenderMock';
import '@testing-library/jest-dom';

const originalRandom = Math.random;
beforeEach(() => {
  Math.random = jest.fn().mockReturnValue(0.3);
});
afterEach(() => {
  Math.random = originalRandom;
});

test('should rendering', async () => {
  const user = userEvent.setup();
  render(<Main />);
  const buttons = screen.getAllByRole('button');
  await waitFor(() => user.click(findByAriaLabel(buttons, 'setting')));
  await waitFor(() => user.click(screen.getByRole('button', { name: 'new game' })));

  expect(screen.getByText(/151/)).toBeInTheDocument();
  expect(screen.getAllByText(/7/)).toHaveLength(3);
  await waitFor(() => user.click(findByAriaLabel(buttons, 'one')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'four')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'four')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'enter')));
  expect(screen.getAllByText(/7/)).toHaveLength(4);
  await waitFor(() => user.click(findByAriaLabel(buttons, 'one')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'three')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'seven')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'enter')));
  expect(screen.getAllByText(/7/)).toHaveLength(5);
  await waitFor(() => user.click(findByAriaLabel(buttons, 'one')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'three')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'zero')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'enter')));
  expect(screen.getByText(/Call/)).toBeInTheDocument();
  await waitFor(() => user.click(findByAriaLabel(buttons, 'two')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'one')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'enter')));
  expect(screen.getByText(/151/)).toBeInTheDocument();
  expect(screen.getAllByText(/7/)).toHaveLength(3);
}, 30000);
