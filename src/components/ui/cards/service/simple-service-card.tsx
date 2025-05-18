import Image from 'next/image';
import Link from 'next/link';

type ServiceCardProps = {
    title: string;
    description?: string;
    iconUrl?: string;
    iconAlt?: string;
    link?: string;
};

export const ServiceCard = ({
    title,
    description,
    iconUrl,
    iconAlt = '',
    link,
}: ServiceCardProps) => {
    const content = (
        <div className="flex flex-col items-start gap-4 p-6 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-shadow duration-200 h-full">
            {iconUrl && (
                <div className="w-12 h-12 relative">
                    <Image
                        src={iconUrl}
                        alt={iconAlt || title}
                        fill
                        className="object-contain"
                    />
                </div>
            )}
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {description && (
                <p className="text-sm text-gray-600 line-clamp-4">{description}</p>
            )}
        </div>
    );

    return link ? <Link href={link}>{content}</Link> : content;
};
