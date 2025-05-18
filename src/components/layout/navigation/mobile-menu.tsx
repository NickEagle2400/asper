'use client';

import { useEffect, useState } from 'react';
import { X, Menu } from 'lucide-react';
import Link from 'next/link';

export const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    // Blocca lo scroll del body
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <>
            {/* Bottone hamburger */}
            <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 cursor-pointer"
                aria-label="Apri menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Overlay e contenuto del flyout */}
            {open && (
                <div className="fixed inset-0 z-50 bg-white flex flex-col md:flex-row h-screen w-screen transition-all">
                    {/* Chiudi */}
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 p-2 text-gray-700 z-50"
                        aria-label="Chiudi menu"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Colonna link a sinistra */}
                    <div className="w-full md:w-1/3 p-8 flex flex-col items-start gap-6 overflow-y-auto">
                        <Link href="/" onClick={toggleMenu} className="text-2xl md:text-4xl font-medium text-gray-900">Home</Link>
                        <Link href="/servizi" onClick={toggleMenu} className="text-2xl md:text-4xl font-medium text-gray-900">Servizi</Link>
                        <Link href="/portfolio" onClick={toggleMenu} className="text-2xl md:text-4xl font-medium text-gray-900">Portfolio</Link>
                        <Link href="/contatti" onClick={toggleMenu} className="text-2xl md:text-4xl font-medium text-gray-900">Contatti</Link>
                    </div>

                    {/* Colonna contenuto a destra (visibile solo su desktop) */}
                    <div className="hidden md:flex w-2/3 p-8 border-l overflow-y-auto">
                        <div className="grid grid-cols-2 gap-6 w-full">
                            {/* Placeholder per contenuti dinamici o preview */}
                            <div className="bg-gray-100 aspect-[4/3]" />
                            <div className="bg-gray-100 aspect-[4/3]" />
                            <div className="bg-gray-100 aspect-[4/3]" />
                            <div className="bg-gray-100 aspect-[4/3]" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
