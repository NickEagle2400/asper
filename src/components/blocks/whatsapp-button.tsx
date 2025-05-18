import Link from 'next/link';
import { Image } from '../ui';

type WhatsappButtonProps = {
    phoneNumber: string; // es: "393471234567"
    message?: string;    // opzionale messaggio precompilato
};

export const WhatsappButton = ({
    phoneNumber,
    message = 'Ciao, vorrei avere informazioni!',
}: WhatsappButtonProps) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chatta su WhatsApp"
            className="fixed bottom-4 right-4 z-100 hover:scale-110 transition-transform duration-200"
        >
            <div className="w-10 h-10 flex items-center justify-center">
                <Image
                    image={{
                        url:"/assets/svgs/whatsapp.svg",
                        alt:"WhatsApp",
                        width:36,
                        height:36
                    }}
                />
            </div>
        </Link>
    );
};
