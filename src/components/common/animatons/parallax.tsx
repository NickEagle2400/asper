'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ParallaxItemProps = {
    speed?: number; // maggiore = più movimento
    children: React.ReactNode;
    className?: string;
};

gsap.registerPlugin(ScrollTrigger);

export const ParallaxItem = ({ speed = 0.3, children, className = '' }: ParallaxItemProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        gsap.to(element, {
            yPercent: speed * 100,
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
            invalidateOnRefresh: true,
            markers: true
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [speed]);

    return (
        <div ref={ref} className={`will-change-transform ${className}`}>
            {children}
        </div>
    );
};
