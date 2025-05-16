'use client';

import Head from 'next/head';
import { siteMetadata } from '@/lib/siteMetadata';

export const LocalBusinessSchema = () => {
    const {
        name,
        url,
        logo,
        description,
        phone,
        address,
        geo,
        social,
        openingHours,
    } = siteMetadata;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name,
        image: logo,
        description,
        url,
        telephone: phone,
        address: {
            '@type': 'PostalAddress',
            streetAddress: address.street,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.country,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: geo.lat,
            longitude: geo.lng,
        },
        openingHours,
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
