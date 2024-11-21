import { Meta, StoryObj } from "@storybook/react";
import Title from "../components/ui/Title";

const meta = {
  title: "Components/Title",
  component: Title,
  argTypes: {
    label: { control: "text", description: "Text que es mostrarà al títol" },
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Sample Title",
  },
};

export const CustomLabel: Story = {
  args: {
    label: "Custom Title Text",
  },
};

export const LongText: Story = {
  args: {
    label:
      "This is a very long title to demonstrate how the component handles longer text in different layouts.",
  },
};
