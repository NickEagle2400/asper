import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cv';
import { ReactNode } from 'react';

const badgeStyles = cva(
    'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
    {
        variants: {
            variant: {
                default: 'bg-primary text-white',
                muted: 'bg-muted text-muted-foreground',
                success: 'bg-green-500 text-white',
                warning: 'bg-yellow-400 text-black',
                danger: 'bg-red-500 text-white',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

type BadgeProps = {
    children: ReactNode;
    className?: string;
} & VariantProps<typeof badgeStyles>;

export const Badge = ({ children, variant, className }: BadgeProps) => {
    return <span className={cn(badgeStyles({ variant }), className)}>{children}</span>;
};