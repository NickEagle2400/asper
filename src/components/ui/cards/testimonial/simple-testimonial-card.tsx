import Image from 'next/image';

type TestimonialCardProps = {
    name: string;
    quote: string;
    avatarUrl?: string;
    role?: string;
    company?: string;
};

export const TestimonialCard = ({
    name,
    quote,
    avatarUrl,
    role,
    company,
}: TestimonialCardProps) => {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <blockquote className="text-gray-700 italic mb-4">
                “{quote}”
            </blockquote>

            <div className="flex items-center gap-4">
                {avatarUrl && (
                    <div className="w-12 h-12 relative rounded-full overflow-hidden">
                        <Image
                            src={avatarUrl}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                <div>
                    <div className="font-semibold text-gray-900">{name}</div>
                    {role && company && <div className="text-sm text-gray-500"><span>{role}</span> - <span>{company}</span></div>}
                </div>
            </div>
        </div>
    );
};
