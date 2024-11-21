import { Meta, StoryObj } from "@storybook/react";
import PhotoCard from "../components/ui/PhotoCard";

const meta = {
  title: "Components/PhotoCard",
  component: PhotoCard,
  parameters: {
      layout: 'centered',
    },
  argTypes: {
    imgUrl: { control: "text", description: "URL de la imatge" },
    text: { control: "text", description: "Text que apareix sota la imatge" },
  },
} satisfies Meta<typeof PhotoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: "https://via.placeholder.com/200x250",
    text: "Sample Text",
  },
};