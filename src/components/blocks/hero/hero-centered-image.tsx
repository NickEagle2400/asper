import { Container, Flex, Section } from "@/components/layout";
import { Text, Title } from "@/components/ui";
import { Button } from "@/components/ui/button-link";

export type HeroCenteredImageProps = {
    title: string;
    description: string;
    ctaPrimary: {
        label: string;
        href: string;
    };
    ctaSecondary?: {
        label: string;
        href: string;
        icon?: React.ReactNode;
    };
    backgroundImageUrl: string;
};

export const HeroCenteredImage = ({
    title,
    description,
    ctaPrimary,
    ctaSecondary,
    backgroundImageUrl,
}: HeroCenteredImageProps) => {
    return (
        <Section fullWidth className="relative h-[70vh] md:h-screen overflow-hidden text-white">
            {/* Background */}
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <Container className="h-full relative z-10">
                <Flex direction="col" align="center" justify="center" className="h-full" gap="gap-x-6">
                    <Title as="h1" size={"xl"} align={"center"} className="mb-4 !text-white">
                        {title}
                    </Title>
                    <Text
                        as="p"
                        size="lg"
                        variant={"default"}
                        align={"center"}
                        className="max-w-2xl !text-white mb-8"
                    >
                        {description}
                    </Text>

                    <Flex justify="center" wrap direction="row" gap="gap-4">
                        <Button href={ctaPrimary.href} variant="primary" size={"lg"}>
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
                </Flex>
            </Container>
        </Section>
    );
};
