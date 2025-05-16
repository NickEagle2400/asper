import { Button } from "@/components/ui/button-link";
import { Divider, Paragraph, Title } from "@/components";
import { ChevronRight, LucideAArrowDown } from "lucide-react";
import { Section } from "@/components/layout/section";
import { TabsList, TabsRoot, TabsContent, TabsTrigger } from "@/components/layout/tabs";
import { Hero } from "@/components/blocks/hero/hero";
import { TextImage } from "@/components/blocks/content/text-image";
import { CenteredCTABanner } from "@/components/blocks/banner-cta";

export default function Home() {
    return (
        <>


            <Hero
                layout="centered-image"
                layoutProps={{
                    title: 'Discover Unique Vacation Experiences',
                    description: 'Experience the beauty of Central America...',
                    backgroundImageUrl: '/assets/images/background/background.jpg',
                    ctaPrimary: { label: 'Get a Quote', href: '/quote' },
                    ctaSecondary: {
                        label: 'Explore',
                        href: '/explore',
                        icon: <ChevronRight className="w-4 h-4" />,
                    },
                }}
            />

            {/* <Hero
                layout="left-image"
                layoutProps={{
                    title: 'Tailored Digital Solutions',
                    description: 'We design custom websites to generate leads in the industrial sector.',
                    imageUrl: "/assets/images/background/background.jpg",
                    ctaPrimary: { label: 'Start your project', href: '/contact' },
                    ctaSecondary: {
                    label: 'See portfolio',
                    href: '/portfolio',
                    icon: <ChevronRight className="w-4 h-4" />,
                    },
                }}
            /> */}



            {/* <Section>
                <Grid cols="grid-cols-1 md:grid-cols-2" gap="gap-y-8 gap-x-8 lg:gap-x-16" align="center">
                    <div className="w-full">
                        <Image
                            image={{
                                url: "/assets/images/segnaposto.jpg",
                                alt: "Team inclusivo",
                                blurDataURL: "/assets/images/blurred-images/segnaposto-blur.webp"
                            }}
                            className="w-full h-auto rounded-md"
                        />
                    </div>
                    <div className="">
                        <Title as="h2" size="xl">
                            Inclusion at every level of our company
                        </Title>
                        <Paragraph className="mt-4">
                            We bring together best-in-class talent from all backgrounds, identities, abilities,
                            and geographies to innovate within an inclusive work environment.
                        </Paragraph>
                        <Divider className="my-6 w-16" />
                        <Button variant="primary" size={"lg"}>
                            Learn More
                        </Button>
                    </div>
                </Grid>
            </Section> */}

            <TextImage
                title="Un team esperto al tuo fianco"
                text={[
                    "Dal 2012 aiutiamo le aziende industriali a trasformare il proprio sito in uno strumento di vendita.",
                    "Sviluppiamo soluzioni digitali su misura per massimizzare il ritorno sull'investimento."
                ]}
                image={{
                    image: {
                        url: '/assets/images/segnaposto.jpg',
                        alt: 'Il nostro team al lavoro',
                        width: 800,
                        height: 600,
                        blurDataURL: '/assets/images/blurred-images/segnaposto-blur.webp',
                    },
                    className: 'rounded-xl shadow-lg',
                    priority: true
                }}
                cta={{
                    label: 'Scopri i nostri servizi',
                    href: '/servizi',
                    variant: 'primary'
                }}
            />


            <TextImage
                title="Un team esperto al tuo fianco"
                text={[
                    "Dal 2012 aiutiamo le aziende industriali a trasformare il proprio sito in uno strumento di vendita.",
                    "Sviluppiamo soluzioni digitali su misura per massimizzare il ritorno sull'investimento."
                ]}
                image={{
                    image: {
                        url: '/assets/images/segnaposto.jpg',
                        alt: 'Il nostro team al lavoro',
                        width: 800,
                        height: 600,
                        blurDataURL: '/assets/images/blurred-images/segnaposto-blur.webp',
                    },
                    className: 'rounded-xl shadow-lg',
                    priority: true
                }}
                cta={{
                    label: 'Scopri i nostri servizi',
                    href: '/servizi',
                    variant: 'primary'
                }}
                reverse
            />

            <CenteredCTABanner
                title="Hai un progetto digitale da realizzare?"
                description="Siamo pronti ad aiutarti a creare una soluzione su misura per la tua azienda."
                cta={{ label: 'Richiedi un preventivo', href: '/contatti' }}
            />

            <CenteredCTABanner
                title="Hai un progetto digitale da realizzare?"
                description="Siamo pronti ad aiutarti a creare una soluzione su misura per la tua azienda."
                cta={{ label: 'Richiedi un preventivo', href: '/contatti' }}
                fullWidth={true}
            />


            <Section>
                <TabsRoot defaultValue="web">
                    <TabsList>
                        <TabsTrigger value="web">Web</TabsTrigger>
                        <TabsTrigger value="design">Design</TabsTrigger>
                        <TabsTrigger value="seo">SEO</TabsTrigger>
                    </TabsList>

                    <TabsContent value="web">
                        <Paragraph>Sviluppo su misura con Next.js e DatoCMS.</Paragraph>
                    </TabsContent>
                    <TabsContent value="design">
                        <Paragraph>UI/UX per aumentare la conversione.</Paragraph>
                    </TabsContent>
                    <TabsContent value="seo">
                        <Paragraph>SEO tecnico e contenuti ottimizzati.</Paragraph>
                    </TabsContent>
                </TabsRoot>
            </Section>


            <Divider />
            <Title
                as="h1"
                align={"center"}
                size={"large"}
                variant={"accent"}
            >
                Lorem ipsum dolor sit amet
            </Title>
            <Title
                as="h2"
            >
                Lorem ipsum dolor sit amet
            </Title>
            <div>
                <Button
                    href="www.google.it"
                    variant={"primary"}
                    size={"xl"}
                >
                    Questo è un bottone
                </Button>
                <Button
                    href="www.google.it"
                    variant={"secondary"}
                    size={"sm"}
                    iconRight={<LucideAArrowDown />}
                >
                    Questo è un bottone
                </Button>
            </div>
        </>

    );
}
