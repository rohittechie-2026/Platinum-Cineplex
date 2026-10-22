import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Platinum Cineplex — Your cinema, elevated",
  description: "Discover movies, explore showtimes, and plan your next cinema experience with Platinum Cineplex."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}