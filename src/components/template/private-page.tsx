import { AdminTopbar } from "../admin/admin-topbar";
import { WhatsappButton } from "../blocks/whatsapp-button";
import { PageTransition } from "../common/transitions/page-transition";
import { Navbar } from "../layout/navigation/navbar";

type DefaultPageProps = {
    children: React.ReactNode,
    className?: string;
}

export const PrivatePage = ({children, className = ''}:DefaultPageProps) => {
    return (
        <>
        <AdminTopbar />
            <main className={`relative h-full z-10 ${className}`}>
                
                <PageTransition>

                    {children}
                    
                </PageTransition>

            </main>
        </>
    );
}