import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button, ToastProvider, useToast } from '../components';

const meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'info',
    size: 'sm',
    rounded: true,
    bordered: false,
    title: 'Notificação',
    description: 'Esta é uma mensagem de toast',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'alert', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'lg'],
    },
    rounded: {
      control: { type: 'boolean' },
    },
    bordered: {
      control: { type: 'boolean' },
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<ToastStoryProps>;

export default meta;
type Story = StoryObj<ToastStoryProps>;

type ToastStoryProps = {
  variant: 'info' | 'success' | 'alert' | 'danger';
  size: 'sm' | 'lg';
  rounded: boolean;
  bordered: boolean;
  title: string;
  description: string;
};

function ToastStory({
  variant,
  size,
  rounded,
  bordered,
  title,
  description,
}: ToastStoryProps) {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      variant,
      size,
      rounded,
      bordered,
      title,
      description,
    });
  };

  return <Button onClick={handleClick}>Disparar Toast</Button>;
}

export const Default: Story = {
  render: (args) => (
    <ToastProvider duration={3000}>
      <ToastStory {...args} />
    </ToastProvider>
  ),
};
