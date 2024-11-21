import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/ui/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: { 
    onClick: fn(),
    children: "Click Me"
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    as: "button",
    children: "Click Me",
    onClick: fn(),
  }
}

export const LinkButton: Story = {
  args: {
    as: "link",
    children: "Click Me",
    onClick: fn(),
  }
}