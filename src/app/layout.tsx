import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Fluency House | Personalized English classes online",
  description: "Real-world English built around you. No student books, no generic worksheets. Custom classes designed for your goals, your interests, your level. Free trial class.",
  keywords: ["English classes online", "personalized English", "English teacher Argentina", "conversational English", "business English", "learn English Buenos Aires"],
  authors: [{ name: "Pilar Ratti" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,700;0,900&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
