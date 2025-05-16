import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Asper - Next.js Starter Theme",
    description: "Next.js Starter theme by Nicolas Ricardi & Andrea Brambilla",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
            <body className={`antialiased`}>
                {children}
            </body>
        </html>
    );
}
