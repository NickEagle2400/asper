import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cv';
import { ReactNode } from 'react';

const paragraphStyles = cva('leading-relaxed', {
    variants: {
        size: {
            small: 'text-sm',
            base: 'text-base',
            large: 'text-lg md:text-xl',
        },
        variant: {
            default: 'text-foreground',
            muted: 'text-muted-foreground',
            subtle: 'text-gray-500',
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
});

type ParagraphProps = {
    children: ReactNode;
    as?: keyof HTMLElementTagNameMap;
    id?: string;
    className?: string;
} & VariantProps<typeof paragraphStyles>;

export const Paragraph = ({
    children,
    as: Tag = 'p',
    id,
    size,
    variant,
    align,
    className,
}: ParagraphProps) => {
    return (
        <Tag
            id={id}
            className={cn(paragraphStyles({ size, variant, align }), className)}
        >
            {children}
        </Tag>
    );
};