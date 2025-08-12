import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DocumentCheckIcon,
  GoogleIcon,
  LearningIcon,
  MicrosoftIcon,
  ShieldIcon,
  UsersIcon,
  WhomDocIcon,
} from '../components/icons';
import { Typography } from '../components';

const ICONS = {
  DocumentCheckIcon,
  GoogleIcon,
  LearningIcon,
  MicrosoftIcon,
  ShieldIcon,
  UsersIcon,
  WhomDocIcon,
} as const;
type IconName = keyof typeof ICONS;

const ICON_NAMES = Object.keys(ICONS) as IconName[];

const IconGallery: React.FC = () => (
  <div className="grid grid-cols-3 gap-6">
    {ICON_NAMES.map((name) => {
      const Icon = ICONS[name];

      return (
        <div
          key={name}
          className="flex flex-col justify-center items-center border-1 border-gray-300 p-4 gap-3"
        >
          <Icon />
          <Typography variant="caption">{name}</Typography>
        </div>
      );
    })}
  </div>
);

type IconGalleryArgs = { icon: IconName };

const meta = {
  title: 'Components/Icons',
  component: IconGallery,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    icon: ICON_NAMES[0],
  },
  argTypes: {
    icon: { control: { type: 'select' }, options: ICON_NAMES },
  },
} satisfies Meta<IconGalleryArgs>;

export default meta;

type Story = StoryObj<IconGalleryArgs>;

export const All: Story = {
  render: () => <IconGallery />,
};

export const Playground: Story = {
  render: ({ icon }) => {
    const Icon = ICONS[icon];
    return (
      <div className="flex items-center gap-3">
        <Icon />
        <span className="text-sm">{icon}</span>
      </div>
    );
  },
};
