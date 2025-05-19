'use client';

import { useEffect, useState } from 'react';
import { MobileMenu } from './mobile-menu';
import Link from 'next/link';

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      const scrollingDown = currentY > lastScrollY;
      const scrollingUp = currentY < lastScrollY;

      if (scrollingDown && currentY > 50) {
        setShowNavbar(false);
      } else if (scrollingUp) {
        setShowNavbar(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <span className="font-bold text-lg">Logo</span>
          <ul className="hidden md:flex gap-6 text-sm text-gray-700">
            <li><Link href="/">Home</Link></li>
            <li><a href="#">Servizi</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contatti</a></li>
            <li><Link href="/login">LOGIN</Link></li>
          </ul>
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
};
