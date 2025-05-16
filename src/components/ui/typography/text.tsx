import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cv';
import { ReactNode } from 'react';

const textStyles = cva('inline-block', {
    variants: {
        size: {
            xs: 'text-xs',
            sm: 'text-sm',
            base: 'text-base',
            lg: 'text-lg',
        },
        weight: {
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold',
        },
        variant: {
            default: 'text-foreground',
            muted: 'text-muted-foreground',
            subtle: 'text-gray-500',
            accent: 'text-primary',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
        },
    },
    defaultVariants: {
        size: 'base',
        weight: 'normal',
        variant: 'default',
        align: 'left',
    },
});

type TextProps = {
    children: ReactNode;
    as?: keyof HTMLElementTagNameMap;
    id?: string;
    className?: string;
} & VariantProps<typeof textStyles>;

export const Text = ({
    children,
    as: Tag = 'span',
    id,
    size,
    weight,
    variant,
    align,
    className,
}: TextProps) => {
    return (
        <Tag
            id={id}
            className={cn(textStyles({ size, weight, variant, align }), className)}
        >
            {children}
        </Tag>
    );
};