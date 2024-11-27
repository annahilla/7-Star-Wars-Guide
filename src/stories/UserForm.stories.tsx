import type { Meta, StoryObj } from '@storybook/react';
import UserForm from '../components/UserForm';
import { useState } from 'react';
import { fn } from '@storybook/test';

const meta = {
    title: 'Components/UserForm',
    component: UserForm,
    parameters: {
      layout: 'centered',
    },
    argTypes: {
      title: { control: 'text' },
      email: { control: 'text' },
      password: { control: 'text' },
      setEmail: { action: 'setEmail' },
      setPassword: { action: 'setPassword' },
      onSubmit: { action: 'submitted' },
    },
    args: {
      title: 'text' ,
      email: 'text' ,
      password: 'text',
      setEmail: fn(),
      setPassword: fn(),
      onSubmit: fn()
    }
  } satisfies Meta<typeof UserForm>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const DefaultForm: Story = {
    render: (args) => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
  
      return (
        <UserForm
          {...args}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          onSubmit={() => {}}
        />
      );
    },
    args: {
      title: 'Sign In',
      email: '',
      password: '',
      setEmail: fn(),
      setPassword: fn(),
      onSubmit: fn()
    },
  };
  
  export const PrefilledForm: Story = {
    render: (args) => {
      const [email, setEmail] = useState('user@example.com');
      const [password, setPassword] = useState('password123');
  
      return (
        <UserForm
          {...args}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          onSubmit={() => {}}
        />
      );
    },
    args: {
      title: 'Sign In',
      email: 'user@example.com',
      password: 'password123',
      setEmail: fn(),
      setPassword: fn(),
      onSubmit: fn()
    },
  };