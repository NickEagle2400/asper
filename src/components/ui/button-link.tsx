'use client';

import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import {
    ButtonHTMLAttributes,
    AnchorHTMLAttributes,
    ReactNode,
    forwardRef,
} from 'react';
import { cn } from '@/lib/cv';

const buttonStyles = cva(
    'inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none gap-2',
    {
        variants: {
            variant: {
                primary: 'bg-blue-800 text-white hover:bg-red-500/90',
                secondary: 'bg-blue-500 text-white hover:bg-green-500/90',
                outline: 'border border-border text-foreground hover:bg-muted',
                muted: 'bg-muted text-muted-foreground',
            },
            size: {
                sm: 'h-8 px-3 text-sm',
                regular: 'h-10 px-4 text-base',
                lg: 'h-12 px-5 text-base',
                xl: 'h-14 px-6 text-lg',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'regular',
        },
    }
);

type BaseProps = {
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    className?: string;
    children?: ReactNode;
};

type ButtonLinkProps = BaseProps &
    VariantProps<typeof buttonStyles> &
    (
        | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
        | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    );

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonLinkProps>(
    (
        {
            variant,
            size,
            className,
            iconLeft,
            iconRight,
            children,
            href,
            ...props
        },
        ref
    ) => {
        const classes = cn(buttonStyles({ variant, size }), className);

        const content = (
            <>
                {iconLeft && <span className="inline-flex items-center">{iconLeft}</span>}
                {children && <span>{children}</span>}
                {iconRight && <span className="inline-flex items-center">{iconRight}</span>}
            </>
        );

        if (href) {
            return (
                <Link
                    href={href}
                    className={classes}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
                >
                    {content}
                </Link>
            );
        }

        return (
            <button
                className={classes}
                ref={ref as React.Ref<HTMLButtonElement>}
                {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
            >
                {content}
            </button>
        );
    }
);

Button.displayName = 'Button';