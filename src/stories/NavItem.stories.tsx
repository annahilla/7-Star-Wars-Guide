import type { Meta, StoryObj } from '@storybook/react';
import NavItem from '../components/ui/NavItem';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Components/NavItem',
  component: NavItem,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    to: { control: 'text' },
    children: { control: 'text' },
  },
  args: { 
    to: "/",
    children: "Home"
  },
} satisfies Meta<typeof NavItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavItemDefault: Story = {
    render: (args) => (
        <BrowserRouter>
          <NavItem {...args} />
        </BrowserRouter>
      ),
  args: {
    to: "/",
    children: "Home"
  }
}

export const NavItemActive: Story = {
  render: (args) => (
    <MemoryRouter initialEntries={['/']}>
      <NavItem {...args} />
    </MemoryRouter>
  ),
    args: {
      to: "/",
      children: "Home",
    },
    parameters: {
      routing: {
        currentRoute: "/",
      },
    },
  };
  