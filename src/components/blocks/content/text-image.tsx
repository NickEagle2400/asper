import { Grid, Section } from "@/components/layout";
import { Paragraph, Title } from "@/components/ui";
import { Button } from "@/components/ui/button-link";
import { CustomImageProps, Image } from "@/components/ui/image";

export type TextImageProps = {
    title: string;
    text: string | string[];
    image: CustomImageProps;
    reverse?: boolean;
    cta?: {
        label: string;
        href: string;
        variant?: 'primary' | 'secondary' | 'outline';
    };
};

export const TextImage = ({
    title,
    text,
    image,
    reverse = false,
    cta,
}: TextImageProps) => {
    if (reverse) {
        return (
            <Section>
                <Grid
                    cols="grid-cols-1 md:grid-cols-2"
                    className={reverse ? 'md:flex-row-reverse' : ''}
                    align="center"
                    gap="gap-x-16 gap-y-12"
                >
                    <div className="order-2 md:order-1">
                        <Title as="h2" size={"2xl"} className="mb-4">
                            {title}
                        </Title>
                        {Array.isArray(text)
                            ? text.map((t, i) => (
                                <Paragraph
                                    size={"base"}
                                    className="mb-2 text-muted-foreground"
                                    key={i}
                                >
                                    {t}
                                </Paragraph>
                            ))
                            : (
                                <Paragraph size={"base"} className="text-muted-foreground">
                                    {text}
                                </Paragraph>
                            )}
                        {cta && (
                            <Button href={cta.href} variant={cta.variant ?? 'primary'} size="lg" className="mt-6">
                                {cta.label}
                            </Button>
                        )}
                    </div>
                    <div className="order-1 md:order-2">
                        <Image {...image} />
                    </div>
                </Grid>
            </Section>
        )
    }
    else {
        return (
            <Section>
                <Grid
                    cols="grid-cols-1 md:grid-cols-2"
                    className={reverse ? 'md:flex-row-reverse' : ''}
                    align="center"
                    gap="gap-x-16 gap-y-12"
                >
                    <div>
                        <Image {...image} />
                    </div>
                    <div>
                        <Title as="h2" size={"2xl"} className="mb-4">
                            {title}
                        </Title>
                        {Array.isArray(text)
                            ? text.map((t, i) => (
                                <Paragraph
                                    size={"base"}
                                    className="mb-2 text-muted-foreground"
                                    key={i}
                                >
                                    {t}
                                </Paragraph>
                            ))
                            : (
                                <Paragraph size={"base"} className="text-muted-foreground">
                                    {text}
                                </Paragraph>
                            )}
                        {cta && (
                            <Button href={cta.href} variant={cta.variant ?? 'primary'} size="lg" className="mt-6">
                                {cta.label}
                            </Button>
                        )}
                    </div>

                </Grid>
            </Section>
        )
    }

};
