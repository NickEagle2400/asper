import { AdminTopbar } from "../admin/admin-topbar";
import { PageTransition } from "../common/transitions/page-transition";

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