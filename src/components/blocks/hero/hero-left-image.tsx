import { Flex, Grid, Section } from "@/components/layout";
import { Text, Title } from "@/components/ui";
import { Button } from "@/components/ui/button-link";
import { Image } from "@/components/ui/image";

export type HeroLeftImageProps = {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt?: string;
    ctaPrimary: {
        label: string;
        href: string;
    };
    ctaSecondary?: {
        label: string;
        href: string;
        icon?: React.ReactNode;
    };
};

export const HeroLeftImage = ({
    title,
    description,
    imageUrl,
    imageAlt = '',
    ctaPrimary,
    ctaSecondary,
}: HeroLeftImageProps) => {
    return (
        <Section>
            <Grid cols="grid-cols-1 md:grid-cols-2" gap="gap-12" align="center">
                {/* Image */}
                <div>
                    <Image
                        image={{
                            url:imageUrl,
                            alt:imageAlt,
                            width:1920,
                            height:1080
                        }}
                        className="w-full"
                    />
                </div>

                {/* Text */}
                <div>
                    <Title as="h1" size={"xl"} className="mb-6">
                        {title}
                    </Title>
                    <Text as="p" size="lg" className="mb-8 text-muted-foreground">
                        {description}
                    </Text>

                    <Flex wrap direction="row" gap="gap-4">
                        <Button href={ctaPrimary.href} variant="primary" size="lg">
                            {ctaPrimary.label}
                        </Button>
                        {ctaSecondary && (
                            <Button
                                href={ctaSecondary.href}
                                variant="outline"
                                size="lg"
                                iconRight={ctaSecondary.icon}
                            >
                                {ctaSecondary.label}
                            </Button>
                        )}
                    </Flex>
                </div>
            </Grid>
        </Section>
    );
};
