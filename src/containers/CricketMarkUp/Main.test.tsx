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
  await user.click(screen.getByRole('spinbutton', { name: 'target count' }));
  await user.keyboard('{Control>}A{/Control}{Delete}3');
  await user.click(screen.getByRole('button', { name: 'new game' }));
  await user.click(findByAriaLabel(buttons, '20 triple'));
  await user.click(findByAriaLabel(buttons, '19 triple'));
  await user.click(findByAriaLabel(buttons, '18 triple'));
  await user.click(findByAriaLabel(buttons, 'round change'));
  await user.click(findByAriaLabel(buttons, '17 triple'));
  await user.click(findByAriaLabel(buttons, '16 triple'));
  await user.click(findByAriaLabel(buttons, '15 triple'));
  await user.click(findByAriaLabel(buttons, 'round change'));
  await user.click(findByAriaLabel(buttons, 'outer bull'));
  await user.click(findByAriaLabel(buttons, 'inner bull'));
  await user.click(screen.getByRole('button', { name: 'round over' }));
  expect(screen.getByText(/Total: 8/i)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
}, 30000);
