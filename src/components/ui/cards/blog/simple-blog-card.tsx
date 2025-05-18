import Image from 'next/image';
import Link from 'next/link';
import { Title } from '../../typography';

type BlogCardProps = {
  title: string;
  slug: string;
  excerpt?: string;
  imageUrl?: string;
  imageAlt?: string;
  publishedAt?: string; // es: "2025-05-18"
};

export const BlogCard = ({
  title,
  slug,
  excerpt,
  imageUrl,
  imageAlt = '',
  publishedAt,
}: BlogCardProps) => {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      {imageUrl && (
        <Link href={`/blog/${slug}`}>
          <div className="relative h-52 w-full">
            <Image
              src={imageUrl}
              alt={imageAlt || title}
              fill
              className="object-cover"
            />
          </div>
        </Link>
      )}

      <div className="p-5">
        {publishedAt && (
          <time className="block text-sm text-gray-500 mb-1">
            {new Date(publishedAt).toLocaleDateString('it-IT', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        )}

          <Link href={`/blog/${slug}`} className="block text-lg font-semibold text-gray-900 mb-2 hover:underline">
            <Title as='h3' size={"small"}>
                {title}
            </Title>
          </Link>

        {excerpt && (
          <p className="text-sm text-gray-600 line-clamp-3">{excerpt}</p>
        )}
      </div>
    </article>
  );
};
