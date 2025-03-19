import type { Meta, StoryObj } from "@storybook/react";

import { SearchBar } from "@/components/search/SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Components/Search/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onSearch: { action: "searched" },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default = {
  args: {},
} satisfies Story;
