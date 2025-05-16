import Head from 'next/head';
import { siteMetadata } from '@/lib/siteMetadata';

export const ContactPageSchema = () => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contatti',
        url: `${siteMetadata.url}/contatti`,
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