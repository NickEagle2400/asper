import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cv';
import { ReactNode } from 'react';

const titleStyles = cva(
    'font-semibold tracking-tight',
    {
        variants: {
            size: {
                small: 'text-lg',
                base: 'text-xl md:text-2xl',
                large: 'text-2xl md:text-3xl',
                xl: 'text-4xl md:text-5xl',
                '2xl': 'text-5xl md:text-6xl',
            },
            variant: {
                default: 'text-black',
                muted: 'text-muted-foreground',
                accent: 'text-blue-500',
            },
            align: {
                left: 'text-left',
                center: 'text-center',
                right: 'text-right',
            },
        },
        defaultVariants: {
            size: 'base',
            variant: 'default',
            align: 'left',
        },
    }
);

type TitleProps = {
    children: ReactNode;
    as?: keyof HTMLElementTagNameMap;
    className?: string;
} & VariantProps<typeof titleStyles>;

export const Title = ({
    children,
    as: Tag = 'h2',
    size,
    variant,
    align,
    className,
}: TitleProps) => {
    return (
        <Tag className={cn(titleStyles({ size, variant, align }), className)}>
            {children}
        </Tag>
    );
};