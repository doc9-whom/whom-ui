import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '../components';

const VARIANTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'button',
  'caption',
  'overline',
  'inherit',
] as const;

const WEIGHTS = [
  'thin',
  'extralight',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
] as const;

const AS_OPTIONS = [
  'div',
  'p',
  'span',
  'strong',
  'em',
  'small',
  'label',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'button',
  'a',
] as const;

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body1',
    fontWeight: 'normal',
    as: 'div',
    className: undefined,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: VARIANTS,
    },
    fontWeight: {
      control: { type: 'select' },
      options: WEIGHTS,
    },
    as: {
      control: { type: 'select' },
      options: AS_OPTIONS,
    },
    className: { control: 'text' },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const Basic: Story = {};

export const H1: Story = {
  args: {
    variant: 'h1',
    as: 'h1',
    children: 'Heading 1',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    as: 'h2',
    children: 'Heading 2',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
    as: 'h3',
    children: 'Heading 3',
  },
};

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    as: 'p',
    children: 'Subtitle 1 — supporting text',
  },
};

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    as: 'p',
    children: 'Subtitle 2 — secondary supporting text',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    as: 'p',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    as: 'p',
  },
};

export const ButtonText: Story = {
  args: {
    variant: 'button',
    as: 'span',
    children: 'Primary action',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    as: 'span',
    children: 'Small caption text',
  },
};

export const Overline: Story = {
  args: {
    variant: 'overline',
    as: 'span',
    children: 'OVERLINE LABEL',
  },
};

export const Semibold: Story = {
  args: {
    fontWeight: 'semibold',
  },
};

export const Bold: Story = {
  args: {
    fontWeight: 'bold',
  },
};

export const Black: Story = {
  args: {
    fontWeight: 'black',
  },
};

export const AsSpan: Story = {
  args: {
    as: 'span',
  },
};

export const Gallery: Story = {
  render: () => (
    <div className="space-y-3">
      <Typography variant="h1" as="h1">
        Heading 1
      </Typography>
      <Typography variant="h2" as="h2">
        Heading 2
      </Typography>
      <Typography variant="h3" as="h3">
        Heading 3
      </Typography>
      <Typography variant="h4" as="h4">
        Heading 4
      </Typography>
      <Typography variant="h5" as="h5">
        Heading 5
      </Typography>
      <Typography variant="h6" as="h6">
        Heading 6
      </Typography>
      <Typography variant="subtitle1" as="p">
        Subtitle 1
      </Typography>
      <Typography variant="subtitle2" as="p">
        Subtitle 2
      </Typography>
      <Typography variant="body1" as="p">
        Body 1 — The quick brown fox jumps over the lazy dog.
      </Typography>
      <Typography variant="body2" as="p">
        Body 2 — The quick brown fox jumps over the lazy dog.
      </Typography>
      <Typography variant="button">BUTTON TEXT</Typography>
      <Typography variant="caption">Caption text</Typography>
      <Typography variant="overline">OVERLINE</Typography>
    </div>
  ),
};
