import Image from 'next/image';
import Link from 'next/link';

type SimplePartnerCardProps = {
    name: string;
    logoUrl: string;
    website?: string;
};

export const SimplePartnerCard = ({
    name,
    logoUrl,
    website,
}: SimplePartnerCardProps) => {
    const logo = (
        <div className="w-full h-20 relative flex items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <Image
                src={logoUrl}
                alt={name}
                fill
                className="object-contain"
            />
        </div>
    );

    return website ? (
        <Link href={website} target="_blank" rel="noopener noreferrer">
            {logo}
        </Link>
    ) : (
        logo
    );
};
