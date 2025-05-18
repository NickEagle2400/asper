import { WhatsappButton } from "../blocks/whatsapp-button";
import { Navbar } from "../layout/navigation/navbar";

type DefaultPageProps = {
    children: React.ReactNode,
    className?: string;
}

export const DefaultPage = ({children, className = ''}:DefaultPageProps) => {
    return (
        <main className={`relative h-full z-10 ${className}`}>
            <Navbar />
            
            {children}
            
            <WhatsappButton 
                phoneNumber="+39"
            />
        </main>
    );
}