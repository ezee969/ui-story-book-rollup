import type { Meta } from "@storybook/react";
import ContactInfoPopup from "./ContactInfoPopup";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/ContactInfoPopup",
  component: ContactInfoPopup,
  tags: ["autodocs"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof ContactInfoPopup>;

export default meta;
