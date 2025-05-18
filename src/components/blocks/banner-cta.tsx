import { Paragraph, Title } from '../ui';
import { Container, Flex, Section } from '../layout';
import { Button } from '../ui/button-link';

export type CenteredCTABannerProps = {
    title: string;
    description?: string;
    cta: {
        label: string;
        href: string;
        variant?: 'primary' | 'secondary' | 'outline';
    };
    fullWidth?: boolean;
};

export const CenteredCTABanner = ({
    title,
    description,
    cta,
    fullWidth = false,
}: CenteredCTABannerProps) => {
    if(fullWidth){
    return (
        <Section className="bg-black text-white py-16">
            <Title as="h2" size="2xl" align={'center'} className="mb-4 text-white">
                {title}
            </Title>
            {description && (
                <Paragraph as="p" size={"base"} align={"center"} className="mb-6 text-white/90">
                    {description}
                </Paragraph>
            )}
            <Flex className='flex-row wrap justify-center items-center'>
                <Button href={cta.href} variant={cta.variant ?? 'secondary'} size="lg">
                    {cta.label}
                </Button>
            </Flex>
        </Section>
    );
}
else{
    return (
        <Section className="text-white">
            <Container className='bg-black p-8 md:p-12 lg:p-24 rounded-2xl'>
                <Title as="h2" size="xl" align={'center'} className="mb-4 text-white">
                    {title}
                </Title>
                {description && (
                    <Paragraph as="p" size={"base"} align={"center"} className="mb-6 text-white/90">
                        {description}
                    </Paragraph>
                )}
                <Flex className='flex-row wrap justify-center items-center'>
                    <Button href={cta.href} variant={cta.variant ?? 'secondary'} size="lg">
                        {cta.label}
                    </Button>
                </Flex>
            </Container>
        </Section>
    );
}
};
