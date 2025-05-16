import { cn } from '@/lib/cv';

type DividerProps = {
    orientation?: 'horizontal' | 'vertical';
    className?: string;
};

export const Divider = ({ orientation = 'horizontal', className }: DividerProps) => {
    return (
        <div
            className={cn(
                'bg-black',
                orientation === 'horizontal' ? 'h-px w-full my-4' : 'w-px h-full mx-4',
                className
            )}
        />
    );
};