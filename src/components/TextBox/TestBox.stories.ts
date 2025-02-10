import type { Meta, StoryObj } from "@storybook/react";
import TestBox from "./TestBox";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/TestBox",
  component: TestBox,
  tags: ["autodocs"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof TestBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Red: Story = {
  args: {
    bgColor: "red",
  },
};

export const Blue: Story = {
  args: {
    bgColor: "blue",
  },
};

export const Green: Story = {
  args: {
    bgColor: "green",
  },
};
