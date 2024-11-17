import "./globals.css";

import { Noto_Sans } from 'next/font/google';

const noto = Noto_Sans(
    {
        variable: "--noto-sans",
        subsets: ["latin"],
    }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-linear-background min-h-screen ${noto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
