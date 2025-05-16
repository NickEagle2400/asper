import { cn } from '@/lib/cv';
import { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
    className?: string;
    as?: keyof HTMLElementTagNameMap;
};

export const Container = ({
    children,
    className,
    as: Tag = 'div',
}: ContainerProps) => {
    return (
        <Tag className={cn('mx-auto w-full max-w-screen-xl', className)}>
            {children}
        </Tag>
    );
};