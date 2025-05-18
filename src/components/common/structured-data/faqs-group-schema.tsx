import Head from 'next/head';

type FaqsSchemaProps = {
    faqs: {
        question: string;
        answer: string[];
    }[];
};

export const FaqsSchema = ({ faqs }: FaqsSchemaProps) => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map((faq) => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer.map(p => `<p>${p}</p>`).join('')
            }
        }))
    };

    return (
        <Head>
            <script
                key="faq-jsonld-group"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </Head>
    );
};
