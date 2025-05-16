import { siteMetadata } from './siteMetadata';

type Crumb = {
    name: string;
    href: string;
};

export const generateBreadcrumbs = (pathname: string): Crumb[] => {
    const baseUrl = siteMetadata.url;
    const parts = pathname.split('/').filter(Boolean); // rimuove vuoti

    const breadcrumbs: Crumb[] = [
        { name: 'Home', href: baseUrl },
    ];

    parts.forEach((slug, index) => {
        const href = `${baseUrl}/${parts.slice(0, index + 1).join('/')}`;
        const name = slug
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());

        breadcrumbs.push({ name, href });
    });

    return breadcrumbs;
};
