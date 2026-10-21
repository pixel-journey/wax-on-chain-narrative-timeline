import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'A minimum gap between events',
  description: '100 then 130 is kept when the gap is 30 seconds. 129 is refused. Nothing is stored.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
