import Image from 'next/image';
import Link from 'next/link';

type CaseStudyCardProps = {
    title: string;
    imageUrl?: string;
    imageAlt?: string;
    category?: string;
    slug: string;
    excerpt?: string;
};

export const CaseStudyCard = ({
    title,
    imageUrl,
    imageAlt = '',
    category,
    slug,
    excerpt,
}: CaseStudyCardProps) => {
    return (
        <article className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
            <Link href={`/portfolio/${slug}`}>
                {imageUrl && (
                    <div className="relative h-56 w-full">
                        <Image
                            src={imageUrl}
                            alt={imageAlt || title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                <div className="p-5">
                    {category && (
                        <span className="text-xs uppercase text-gray-500 tracking-wide block mb-1">
                            {category}
                        </span>
                    )}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                    {excerpt && (
                        <p className="text-sm text-gray-600 line-clamp-3">{excerpt}</p>
                    )}
                </div>
            </Link>
        </article>
    );
};
