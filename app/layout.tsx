import "./globals.css";

import MobileNavMenu from "@/components/Navbar/MobileNavMenu";
import MenuNavProvider from "@/context/MenuNavContext";

import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({
    variable: "--noto-sans",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`min-h-screen bg-linear-background antialiased ${noto.className}`}
            >
                <MenuNavProvider>
                    <MobileNavMenu />
                    {children}
                </MenuNavProvider>
            </body>
        </html>
    );
}
