type DefaultPageProps = {
    children: React.ReactNode,
    className?: string;
}

export const DefaultPage = ({children, className = ''}:DefaultPageProps) => {
    return (
        <main className={`relative z-10 ${className}`}>
            {children}
        </main>
    );
}