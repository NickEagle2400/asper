'use client'

import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react'; // opzionale, icona animata
import { cn } from '@/lib/cv'; // opzionale, className helper

type FaqItemProps = {
    question: string;
    answer: string[];
};

export const FaqItem = ({ question, answer }: FaqItemProps) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full text-left cursor-pointer"
                aria-expanded={open}
            >
                <span className="text-lg font-medium">{question}</span>
                <ChevronDown
                    className={cn(
                        'h-5 w-5 transition-transform duration-300',
                        open && 'rotate-180'
                    )}
                />
            </button>

            <div
                ref={contentRef}
                style={{
                    height: open ? contentRef.current?.scrollHeight : 0,
                }}
                className={cn(
                    'overflow-hidden transition-[height] duration-300 ease-in-out'
                )}
            >
                <div className="pt-3 pb-2">
                    {answer.map((paragraph, i) => (
                        <p key={i} className="text-gray-600 mb-2 last:mb-0">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};
