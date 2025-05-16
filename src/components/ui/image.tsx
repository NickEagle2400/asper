import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/cv';

type CMSImage = {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
    blurDataURL?: string;
};

export type CustomImageProps = {
    image?: CMSImage;
    src?: string;
    alt?: string;
    className?: string;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    sizes?: string;
    fill?: boolean;
    priority?: boolean;
} & Omit<NextImageProps, 'src' | 'alt' | 'width' | 'height'>;

export const Image = ({
    image,
    src,
    alt,
    className,
    objectFit = 'cover',
    sizes = '100vw',
    fill = false,
    priority = false,
    ...props
}: CustomImageProps) => {
    const finalSrc = image?.url || src;
    const finalAlt = image?.alt || alt || '';
    const width = image?.width || 1080;
    const height = image?.height || 1080;
    const blurDataURL = image?.blurDataURL;

    if (!finalSrc) return null;

    return (
        <NextImage
            src={finalSrc}
            alt={finalAlt}
            width={!fill ? width : undefined}
            height={!fill ? height : undefined}
            fill={fill}
            className={cn('rounded-md object-cover', className)}
            sizes={sizes}
            priority={priority}
            placeholder={blurDataURL ? 'blur' : 'empty'}
            blurDataURL={blurDataURL}
            style={{ objectFit }}
            {...props}
        />
    );
};
