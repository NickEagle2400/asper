import { cn } from '@/lib/cv';
import { ReactNode } from 'react';
import { Container } from './container';

type SectionProps = {
    id?: string;
    className?: string;
    children: ReactNode;
    fullWidth?: boolean;
    as?: keyof HTMLElementTagNameMap;
};

export const Section = ({
    id,
    className,
    children,
    fullWidth = false,
    as: Tag = 'section',
}: SectionProps) => {
    return (
        <Tag id={id} className={cn('py-16 md:py-24 px-4', className)}>
            {fullWidth ? children : <Container>{children}</Container>}
        </Tag>
    );
};