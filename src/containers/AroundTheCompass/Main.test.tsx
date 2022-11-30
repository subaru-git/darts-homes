import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';
import { findByAriaLabel } from '@/lib/TestUtils/FindByAriaLabel';
import { render } from '@/lib/TestUtils/RenderMock';
import '@testing-library/jest-dom';

test('should rendering', async () => {
  const user = userEvent.setup();
  const { container } = render(<Main />);
  const buttons = screen.getAllByRole('button');
  await user.click(findByAriaLabel(buttons, 'setting'));
  await user.click(screen.getByRole('spinbutton', { name: 'round setting' }));
  await user.keyboard('{Control>}A{/Control}{Delete}3');
  await user.click(screen.getByRole('button', { name: 'new game' }));
  for (const _ of Array(2)) {
    await user.click(findByAriaLabel(buttons, '12 double'));
    await user.click(findByAriaLabel(buttons, '12'));
    await user.click(findByAriaLabel(buttons, '6 double'));
    await user.click(findByAriaLabel(buttons, 'round change'));
  }
  expect(screen.getByText('20')).toBeInTheDocument();
  await user.click(findByAriaLabel(buttons, '12 double'));
  await user.click(findByAriaLabel(buttons, '12'));
  await user.click(findByAriaLabel(buttons, '6 double'));
  await user.click(screen.getByRole('button', { name: 'round over' }));
  expect(screen.getByText(/Total: 30/i)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
}, 30000);
