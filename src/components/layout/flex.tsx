import React from 'react';
import { cn } from '@/lib/cv'; // opzionale, per unire className in modo pulito

type FlexProps = {
    className?: string;
    children: React.ReactNode;
};

export const Flex = ({ className = '', children }: FlexProps) => {
    return (
        <div className={cn('flex', className)}>
            {children}
        </div>
    );
};