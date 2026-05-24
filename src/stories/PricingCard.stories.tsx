import type { Meta, StoryObj } from "@storybook/react";
import { PricingCard } from "@/components/cards/PricingCard";

const sharedIncludes = [
  "Weekly 60-min conversation session",
  "Topic chosen around your interests each week",
  "Vocabulary in context (not lists — real usage)",
  "Natural feedback on fluency, not just errors",
  "Curated content between classes",
  "WhatsApp access for quick questions",
];

const meta: Meta<typeof PricingCard> = {
  title: "Cards/PricingCard",
  component: PricingCard,
  parameters: { backgrounds: { default: "board" } },
  argTypes: {
    tier:      { control: "select", options: ["conversation", "full-english", "enterprise"] },
    priceMode: { control: "radio", options: ["individual", "group"] },
    featured:  { control: "boolean" },
    rotate:    { control: { type: "range", min: -5, max: 5, step: 0.5 } },
  },
};
export default meta;

type Story = StoryObj<typeof PricingCard>;

export const Conversation: Story = {
  args: {
    tier:        "conversation",
    badge:       "CONVERSATION",
    name:        "Conversation",
    tagline:     '"For people who already know English — they just need to start living in it."',
    description: "Weekly sessions built around real topics. No grammar drills — just fluency work.",
    includes:    sharedIncludes,
    bestFor:     "BEST FOR: B1–C1 students who freeze when they have to speak.",
    pricing:     { individual: { per_class: "$35 / class", per_month: "$120 / month", save_note: "Save $20 with monthly plan" } },
    priceMode:   "individual",
    rotate:      -1,
  },
};

export const FullEnglish: Story = {
  args: {
    tier:        "full-english",
    badge:       "FULL ENGLISH",
    name:        "Full English",
    tagline:     '"Grammar, speaking, listening, writing — all of it, built around you."',
    description: "Structured, cohesive classes that cover all four skills. Every class is a custom-built presentation.",
    includes:    sharedIncludes,
    bestFor:     "BEST FOR: Students building from scratch or filling gaps.",
    pricing:     { individual: { per_class: "$45 / class", per_month: "$160 / month", save_note: "Save $20 with monthly plan" } },
    priceMode:   "individual",
    featured:    true,
  },
};

export const Enterprise: Story = {
  args: {
    tier:        "enterprise",
    badge:       "ENTERPRISE",
    name:        "Enterprise",
    tagline:     '"English for your team. Built around your industry."',
    description: "A fully custom English program for companies.",
    includes:    sharedIncludes,
    bestFor:     "BEST FOR: Companies with international clients.",
    pricing:     { fixed: { label: "Custom quote", sub: "Based on team size and session frequency.", xs: "Starting from a flat monthly rate · Response within 24 hours" } },
    rotate:      1,
    ctaLabel:    "Get a free quote →",
  },
};

export const GroupPricing: Story = {
  args: {
    ...Conversation.args,
    priceMode: "group",
    pricing: { group: { per_person_class: "$20 / person / class", per_month: "$70 / month", note: "Groups of 2–4. Schedule together, split the cost." } },
  },
};
