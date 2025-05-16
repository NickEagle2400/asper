import Head from 'next/head';
import { siteMetadata } from '@/lib/siteMetadata';

export const WebSiteSchema = () => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteMetadata.name,
        url: siteMetadata.url,
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