import type { Meta, StoryObj } from '@storybook/react';
import TextMessage from '../components/ui/TextMessage';

const meta = {
    title: 'Components/TextMessage',
    component: TextMessage,
    parameters: {
      layout: 'centered',
    },
    argTypes: {
        children: { control: 'text' },
    },
    args: { 
      children: "Text"
    },
  } satisfies Meta<typeof TextMessage>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const DefaultTextMessage: Story = {
    args: {
      children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    }
  }
