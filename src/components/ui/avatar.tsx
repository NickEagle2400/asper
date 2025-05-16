import { cn } from '@/lib/cv';
import Image from 'next/image';

type AvatarProps = {
    src: string;
    alt: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};

const sizeMap = {
    sm: 32,
    md: 48,
    lg: 64,
};

export const Avatar = ({
    src,
    alt,
    size = 'md',
    className,
}: AvatarProps) => {
    const dimension = sizeMap[size];
    return (
        <div className={cn('rounded-full overflow-hidden', className)} style={{ width: dimension, height: dimension }}>
            <Image
                src={src}
                alt={alt}
                width={dimension}
                height={dimension}
                className="object-cover w-full h-full"
            />
        </div>
    );
};