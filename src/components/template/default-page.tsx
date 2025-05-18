import { WhatsappButton } from "../blocks/whatsapp-button";
import { PageTransition } from "../common/transitions/page-transition";
import { Navbar } from "../layout/navigation/navbar";

type DefaultPageProps = {
    children: React.ReactNode,
    className?: string;
}

export const DefaultPage = ({children, className = ''}:DefaultPageProps) => {
    return (
        <main className={`relative h-full z-10 ${className}`}>
            
            <Navbar />

            <PageTransition>

                {children}
                
            </PageTransition>

            <WhatsappButton 
                    phoneNumber="+39"
                />

        </main>
    );
}