import { cn } from '@/lib/cv';
import { ReactNode } from 'react';

type QuoteProps = {
    children: ReactNode;
    author?: string;
    className?: string;
};

export const Quote = ({ children, author, className }: QuoteProps) => {
    return (
        <blockquote className={cn('border-l-4 pl-4 italic text-muted-foreground', className)}>
            <p className="mb-1">{children}</p>
            {author && <footer className="text-sm text-foreground">— {author}</footer>}
        </blockquote>
    );
};