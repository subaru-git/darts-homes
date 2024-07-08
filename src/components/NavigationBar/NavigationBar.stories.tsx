import type { Meta, StoryObj } from '@storybook/react';
import NavigationBar from './NavigationBar';

const meta: Meta<typeof NavigationBar> = {
  component: NavigationBar,
  title: 'Components/NavigationBar',
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;
export const Default: Story = {
  args: {
    items: [
      {
        label: 'Games',
        children: [
          {
            label: '501',
            subLabel: 'The popular dart game',
            href: '#',
          },
          {
            label: "Eagle's Eye",
            subLabel: 'A dart game for BULL practice',
            href: '#',
          },
          {
            label: 'Cricket Number Count',
            subLabel: 'A original dart game for practice. designed by kikuyama.',
            href: '#',
          },
        ],
      },
      {
        label: 'Respect',
        href: '#',
      },
    ],
  },
};
