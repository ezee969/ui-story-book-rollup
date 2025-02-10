import type { Meta, StoryObj } from '@storybook/react';

import ContactInfoPopup from './ContactInfoPopup';

const meta = {
  component: ContactInfoPopup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactInfoPopup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    open: true,
  }
};