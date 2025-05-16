import Head from 'next/head';
import { siteMetadata } from '@/lib/siteMetadata';

export const AboutPageSchema = () => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Chi siamo',
        url: `${siteMetadata.url}/chi-siamo`,
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