import { cn } from '@/lib/cv';
import { ReactNode } from 'react';

type GridProps = {
    children: ReactNode;
    className?: string;
    as?: keyof HTMLElementTagNameMap;
    cols?: string; // es: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
    gap?: string;  // es: 'gap-4 sm:gap-x-6 md:gap-y-8'
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
};

export const Grid = ({
    children,
    className,
    as: Tag = 'div',
    cols = 'grid-cols-1',
    gap = 'gap-4',
    justify = 'start',
    align = 'stretch',
}: GridProps) => {
    return (
        <Tag
            className={cn(
                'grid',
                cols,
                gap,
                `justify-${justify}`,
                `items-${align}`,
                className
            )}
        >
            {children}
        </Tag>
    );
};
