import { cn } from '@/lib/cv';

type SkeletonProps = {
    className?: string;
};

export const Skeleton = ({ className }: SkeletonProps) => {
    return (
        <div
            className={cn(
                'animate-pulse rounded-md bg-zinc-400',
                className
            )}
        />
    );
};