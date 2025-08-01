import type { Meta, StoryObj } from '@storybook/react-vite';
import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

import { Alert } from '../components/Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Alerta padrão',
    description: 'Essa é uma mensagem de exemplo para o componente de alerta.',
    variant: 'info',
    size: 'sm',
    rounded: false,
    bordered: true,
    icon: <Info size={20} />,
    date: new Date(),
    dateFormat: 'dd MMM | HH:mm',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    variant: {
      control: 'select',
      options: ['info', 'success', 'alert', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'lg'],
    },
    rounded: { control: 'boolean' },
    bordered: { control: 'boolean' },
    icon: { table: { disable: true } },
    date: { control: 'date' },
    dateFormat: { control: 'text' },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    title: 'Sucesso!',
    description: 'Sua ação foi concluída com sucesso.',
    variant: 'success',
    icon: <CheckCircle size={20} />,
  },
};

export const AlertWarning: Story = {
  args: {
    title: 'Atenção!',
    description: 'Essa ação pode ter consequências inesperadas.',
    variant: 'alert',
    icon: <AlertTriangle size={20} />,
  },
};

export const Danger: Story = {
  args: {
    title: 'Erro!',
    description: 'Ocorreu um erro ao tentar processar sua solicitação.',
    variant: 'danger',
    icon: <XCircle size={20} />,
  },
};

export const LargeRounded: Story = {
  args: {
    size: 'lg',
    rounded: true,
  },
};

export const WithoutBorder: Story = {
  args: {
    bordered: false,
  },
};

export const WithoutTimestamp: Story = {
  args: {
    date: undefined,
  },
};
