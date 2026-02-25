import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Lumi — Твой личный косметолог",
  description:
    "Подберем уходовую косметику, подходящую тебе до 100%. Ответь на вопросы и получи список самых подходящих средств.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body className="font-sans antialiased"
        style={{ fontFamily: "var(--font-manrope, 'Manrope', system-ui, sans-serif)" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
