
import React from 'react';
import { cn } from '@/lib/cv';

type GridProps = {
    className?: string;
    children: React.ReactNode;
};

export const Grid = ({ className = '', children }: GridProps) => {
    return (
        <div className={cn('grid', className)}>
            {children}
        </div>
    );
};