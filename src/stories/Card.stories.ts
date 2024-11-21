import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/ui/Card';

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
      layout: 'centered',
    },
    argTypes: {
        children: { control: 'text' },
    },
    args: { 
      children: "Text"
    },
  } satisfies Meta<typeof Card>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const DefaultCard: Story = {
    args: {
      children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quibusdam, excepturi ratione eum nobis minus porro assumenda, facilis at voluptatibus sint, reiciendis est recusandae autem modi? Laborum atque veniam minus voluptates distinctio aliquid quo vero molestias impedit repudiandae, deserunt ad earum quam officiis possimus repellendus consequuntur voluptate corporis repellat ipsa!",
    }
  }
