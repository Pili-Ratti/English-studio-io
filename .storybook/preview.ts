import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: {
      default: "board",
      values: [
        { name: "board",    value: "#C9AA5A" },
        { name: "paper",    value: "#F5F0E8" },
        { name: "chalk",    value: "#F9F7F3" },
        { name: "dark",     value: "#1E1E1E" },
      ],
    },
  },
};

export default preview;
