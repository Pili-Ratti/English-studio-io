import type { Meta, StoryObj } from "@storybook/react";
import { TornCard } from "@/components/cards/TornCard";

const meta: Meta<typeof TornCard> = {
  title: "Cards/TornCard",
  component: TornCard,
  parameters: { backgrounds: { default: "board" } },
  argTypes: {
    torn:       { control: "select", options: ["bottom", "top", "none"] },
    variant:    { control: "select", options: ["paper", "warm", "alt", "kraft"] },
    rotate:     { control: { type: "range", min: -5, max: 5, step: 0.5 } },
    graphPaper: { control: "boolean" },
    shadow:     { control: "select", options: ["card", "pin", "none"] },
  },
};
export default meta;

type Story = StoryObj<typeof TornCard>;

const SampleContent = () => (
  <div className="p-10">
    <h2 className="font-display font-black text-[40px] text-ink mb-3">Torn Paper Card</h2>
    <p className="text-ink-muted text-[15px]">This is what a scrapbook card looks like. The torn edge is a CSS clip-path — crisp at any size, no images needed.</p>
  </div>
);

export const TornBottom:    Story = { args: { torn: "bottom", variant: "paper",    rotate: -1 }, render: (args) => <TornCard {...args}><SampleContent /></TornCard> };
export const TornTop:       Story = { args: { torn: "top",    variant: "warm",     rotate:  1 }, render: (args) => <TornCard {...args}><SampleContent /></TornCard> };
export const GraphPaper:    Story = { args: { torn: "bottom", graphPaper: true,    rotate: -1 }, render: (args) => <TornCard {...args}><SampleContent /></TornCard> };
export const KraftVariant:  Story = { args: { torn: "none",   variant: "kraft",   rotate: 0.5 }, render: (args) => <TornCard {...args}><SampleContent /></TornCard> };
