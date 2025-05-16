import Head from 'next/head';
import { siteMetadata } from '@/lib/siteMetadata';

export const OrganizationSchema = () => {
    const { name, url, logo, social } = siteMetadata;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name,
        url,
        logo,
        sameAs: Object.values(social),
    };

    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </Head>
    );
};