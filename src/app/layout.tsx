import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

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
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
            <body className={`antialiased relative`}>
                <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`} height="0" width="0" className='hidden invisible'></iframe></noscript>
                {children}
            </body>
        </html>
    );
}
