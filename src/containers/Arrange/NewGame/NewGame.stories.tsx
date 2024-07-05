import type { Meta, StoryObj } from '@storybook/react';
import NewGame from './NewGame';

const meta: Meta<typeof NewGame> = { component: NewGame, title: 'Containers/Arrange/NewGame' };

export default meta;
type Story = StoryObj<typeof NewGame>;
export const Default: Story = {
  args: {
    currentSettings: {
      range: { x: 0, y: 0 },
      out: 'double',
      simulation: true,
      hard: false,
      separate: false,
      mode: '3-darts',
      pro: false,
    },
    isFinished: false,
  },
};
