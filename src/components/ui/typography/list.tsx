import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cv';
import { ReactNode } from 'react';

const listStyles = cva('pl-5 list-disc', {
    variants: {
        variant: {
            default: 'text-foreground',
            muted: 'text-muted-foreground',
        },
        spacing: {
            tight: 'space-y-1',
            normal: 'space-y-2',
            loose: 'space-y-3',
        },
    },
    defaultVariants: {
        variant: 'default',
        spacing: 'normal',
    },
});

type ListProps = {
    children: ReactNode;
    as?: 'ul' | 'ol';
    className?: string;
} & VariantProps<typeof listStyles>;

export const List = ({
    children,
    as: Tag = 'ul',
    variant,
    spacing,
    className,
}: ListProps) => {
    return (
        <Tag className={cn(listStyles({ variant, spacing }), className)}>
            {children}
        </Tag>
    );
};