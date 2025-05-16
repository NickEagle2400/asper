import { cn } from '@/lib/cv';
import { ReactNode } from 'react';

type FlexProps = {
    children: ReactNode;
    className?: string;
    as?: keyof HTMLElementTagNameMap;
    direction?: 'row' | 'col';
    gap?: string; // es: 'gap-4 sm:gap-6'
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    wrap?: boolean;
};

export const Flex = ({
    children,
    className,
    as: Tag = 'div',
    direction = 'row',
    gap = 'gap-4',
    justify = 'start',
    align = 'center',
    wrap = false,
}: FlexProps) => {
    return (
        <Tag
            className={cn(
                'flex',
                `flex-${direction}`,
                gap,
                `justify-${justify}`,
                `items-${align}`,
                wrap && 'flex-wrap',
                className
            )}
        >
            {children}
        </Tag>
    );
};
