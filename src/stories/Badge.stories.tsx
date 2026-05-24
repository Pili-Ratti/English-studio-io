import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/Badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: { backgrounds: { default: "board" } },
  argTypes: {
    variant: { control: "select", options: ["crimson", "teal", "gold", "navy", "clip"] },
    rotate:  { control: { type: "range", min: -10, max: 10, step: 0.5 } },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Crimson: Story = { args: { children: "THE REAL TALK", variant: "crimson", rotate: 2 } };
export const Teal:    Story = { args: { children: "THIS IS DIFFERENT", variant: "teal", rotate: 1.5 } };
export const Gold:    Story = { args: { children: "NEW TERM", variant: "gold", rotate: -1 } };
export const Navy:    Story = { args: { children: "ENTERPRISE", variant: "navy", rotate: 2.5 } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-6">
      {(["crimson", "teal", "gold", "navy", "clip"] as const).map((v) => (
        <Badge key={v} variant={v}>{v.toUpperCase()}</Badge>
      ))}
    </div>
  ),
};
