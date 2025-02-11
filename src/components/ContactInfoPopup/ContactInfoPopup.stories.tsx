import type { Meta, StoryObj } from '@storybook/react';
import ContactInfoPopup from './ContactInfoPopup';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  component: ContactInfoPopup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof ContactInfoPopup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
  },
};
