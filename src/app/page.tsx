import { Button } from "@/components/ui/button-link";
import { DefaultPage, Divider, Paragraph, Title } from "@/components";
import { LucideAArrowDown } from "lucide-react";
import { Section } from "@/components/layout/section";
import { TabsList, TabsRoot, TabsContent, TabsTrigger } from "@/components/layout/tabs";
import { TextImage } from "@/components/blocks/content/text-image";
import { CenteredCTABanner } from "@/components/blocks/banner-cta";
import { FaqItem } from "@/components";
import { TestimonialCard } from "@/components/ui/cards/testimonial/simple-testimonial-card";
import { BlogCard } from "@/components/ui/cards/blog/simple-blog-card";
import { ServiceCard } from "@/components/ui/cards/service/simple-service-card";
import { TeamMemberCard } from "@/components/ui/cards/team-member/simple-team-member-card";
import { CaseStudyCard } from "@/components/ui/cards/case-study/case-study-card";
import { SimplePartnerCard } from "@/components/ui/cards/partner/simple-partner-card";
import { MailchimpForm } from "@/components/blocks/mailchimp-newsletter";

export default function Home() {

    const posts = [
        {
            title: 'Come ottimizzare il tuo sito web per i motori di ricerca',
            slug: 'ottimizzazione-seo-siti-web',
            excerpt: 'Scopri le tecniche SEO più efficaci per il 2025...',
            imageUrl: '/assets/images/segnaposto.jpg',
            publishedAt: '2025-05-18',
        },
        {
            title: 'Perché usare un CMS headless nel tuo prossimo progetto?',
            slug: 'cms-headless-nextjs',
            imageUrl: '/assets/images/segnaposto.jpg',
            publishedAt: '2025-05-10',
        },
        {
            title: 'Perché usare un CMS headless nel tuo prossimo progetto?',
            slug: 'cms-headless-nextjs',
            imageUrl: '/assets/images/segnaposto.jpg',
            publishedAt: '2025-05-10',
        },
    ];

    const services = [
        {
            title: 'Siti Web Personalizzati',
            description: 'Progettiamo e sviluppiamo siti su misura per il tuo brand.',
            iconUrl: '/icons/website.svg',
            link: '/servizi/siti-web',
        },
        {
            title: 'Siti Web Personalizzati',
            description: 'Progettiamo e sviluppiamo siti su misura per il tuo brand.',
            iconUrl: '/icons/website.svg',
            link: '/servizi/siti-web',
        },
    ];

    const team = [
        {
            name: 'Luca Bianchi',
            role: 'Developer',
            photoUrl: '/team/luca.jpg',
            bio: 'Frontend e backend con passione per l’ottimizzazione.',
        },
        {
            name: 'Luca Bianchi',
            role: 'Developer',
            photoUrl: '/team/luca.jpg',
            bio: 'Frontend e backend con passione per l’ottimizzazione.',
        },
    ];

    const projects = [
        {
            title: 'E-commerce per Vini Artigianali',
            slug: 'ecommerce-vini',
            imageUrl: '/portfolio/vini.jpg',
            category: 'E-commerce',
            excerpt: 'Piattaforma headless con Shopify + Next.js.',
        },
    ];

    const partners = [
        {
            name: 'Acme Corp',
            logoUrl: '/partners/acme-logo.svg',
            website: 'https://acme.com',
        },
    ];


    return (
        <DefaultPage>

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


            <Section>
                <div className="lg:w-1/2">
                    <FaqItem
                        question="Come funziona il servizio?"
                        answer={[
                            'Ti aiutiamo a progettare e sviluppare il tuo sito partendo da zero.',
                            'Il processo include analisi, design, sviluppo e rilascio con supporto continuo.'
                        ]}
                    />
                </div>
            </Section>

            <div>
                <MailchimpForm />
            </div>

            <div className="container mx-auto py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((s, i) => (
                    <ServiceCard key={i} {...s} />
                ))}

                {team.map((t, i) => (
                    <TeamMemberCard key={i} {...t} />
                ))}
            </div>

            <Section>
                <div className="container mx-auto columns-3 ">
                    <div>
                        <TestimonialCard
                            name="Marco Rossi"
                            quote="Lavorare con NLS Studio è stata un'esperienza eccellente."
                            role="CEO"
                            company="TechWave"
                            avatarUrl="/images/marco.jpg"
                        />
                    </div>
                    <div>
                        <TestimonialCard
                            name="Marco Rossi"
                            quote="Lavorare con NLS Studio è stata un'esperienza eccellente."
                        />
                    </div>
                    <div>
                        <TestimonialCard
                            name="Marco Rossi"
                            quote="Lavorare con NLS Studio è stata un'esperienza eccellente."
                            role="CEO"
                            company="TechWave"
                        />
                    </div>
                </div>
            </Section>

            <Section>
                <div className="container mx-auto columns-3 ">
                    {posts.map((post, i) => (
                        <div key={i}>
                            <BlogCard {...post} />
                        </div>
                    ))}
                </div>
            </Section>

            <section className="py-16 container mx-auto">
                <h2 className="text-2xl font-bold mb-6">Progetti</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p, i) => (
                        <CaseStudyCard key={i} {...p} />
                    ))}
                </div>
            </section>

            <section className="py-12 container mx-auto">
                <h2 className="text-2xl font-bold mb-6">Partner</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center">
                    {partners.map((p, i) => (
                        <SimplePartnerCard key={i} {...p} />
                    ))}
                </div>
            </section>

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
        </DefaultPage>

    );
}
