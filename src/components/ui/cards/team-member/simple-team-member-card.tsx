import Image from 'next/image';

type TeamMemberCardProps = {
    name: string;
    role?: string;
    photoUrl?: string;
    bio?: string;
};

export const TeamMemberCard = ({
    name,
    role,
    photoUrl,
    bio,
}: TeamMemberCardProps) => {
    return (
        <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl bg-white shadow-sm h-full">
            {photoUrl && (
                <div className="w-24 h-24 relative mb-4 rounded-full overflow-hidden">
                    <Image
                        src={photoUrl}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            {role && <p className="text-sm text-gray-500">{role}</p>}
            {bio && <p className="text-sm text-gray-600 mt-2 line-clamp-4">{bio}</p>}
        </div>
    );
};
