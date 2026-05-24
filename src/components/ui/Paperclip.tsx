import { cn } from "@/lib/utils";

type PaperclipProps = {
  size?: number;
  color?: string;
  className?: string;
};

export function Paperclip({ size = 28, color = "#E07B39", className }: PaperclipProps) {
  const h = Math.round(size * (40 / 28));
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 32 44"
      fill="none"
      aria-hidden="true"
      className={cn("flex-shrink-0", className)}
    >
      <path
        d="M16 2C10.477 2 6 6.477 6 12V32C6 37.523 10.477 42 16 42C21.523 42 26 37.523 26 32V14H22V32C22 35.314 19.314 38 16 38C12.686 38 10 35.314 10 32V12C10 8.686 12.686 6 16 6C19.314 6 22 8.686 22 12V14H26V12C26 6.477 21.523 2 16 2Z"
        fill={color}
        stroke={color === "#E07B39" ? "#C66A2E" : color}
        strokeWidth="0.5"
      />
    </svg>
  );
}
