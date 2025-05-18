'use client';

import { useEffect, useState } from 'react';
import { onCLS, onLCP, onINP, type Metric } from 'web-vitals';

type Vital = {
    label: string;
    value: number | null;
    color: string;
};

function getColor(name: string, value: number | null): string {
    if (value === null) return 'text-gray-400';

    switch (name) {
        case 'CLS':
            return value <= 0.1 ? 'text-green-500' : value <= 0.25 ? 'text-yellow-500' : 'text-red-500';
        case 'LCP':
            return value <= 2500 ? 'text-green-500' : value <= 4000 ? 'text-yellow-500' : 'text-red-500';
        case 'INP':
            return value <= 200 ? 'text-green-500' : value <= 500 ? 'text-yellow-500' : 'text-red-500';
        default:
            return 'text-white';
    }
}

export const PerformanceBar = () => {
    const [cls, setCls] = useState<number | null>(null);
    const [lcp, setLcp] = useState<number | null>(null);
    const [inp, setInp] = useState<number | null>(null);

    useEffect(() => {
        onCLS((metric: Metric) => setCls(metric.value));
        onLCP((metric: Metric) => setLcp(metric.value));
        onINP((metric: Metric) => setInp(metric.value));
    }, []);

    if (process.env.NODE_ENV !== 'development') return null;

    const vitals: Vital[] = [
        { label: 'CLS', value: cls, color: getColor('CLS', cls) },
        { label: 'LCP', value: lcp, color: getColor('LCP', lcp) },
        { label: 'INP', value: inp, color: getColor('INP', inp) },
    ];

    return (
        <div className="fixed bottom-0 left-0 z-[9999] bg-black/90 text-xs font-mono px-4 py-2 flex gap-6">
            {vitals.map((v) => (
                <span key={v.label} className={v.color}>
                    {v.label}: {v.value !== null ? (v.label === 'CLS' ? v.value.toFixed(3) : `${Math.round(v.value)}ms`) : '...'}
                </span>
            ))}
        </div>
    );
};
