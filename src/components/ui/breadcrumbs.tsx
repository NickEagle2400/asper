'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { generateBreadcrumbs } from '@/lib/generateBreadcrumbs';
import { cn } from '@/lib/cv';
import { List, Text } from './typography';

type BreadcrumbProps = {
    className?: string;
    separator?: string;
    separatorElement?: React.ReactNode;
    rootLabel?: string;
};

export const Breadcrumb = ({
    className,
    separator = '/',
    separatorElement,
    rootLabel = 'Home',
}: BreadcrumbProps) => {
    const pathname = usePathname();
    const items = generateBreadcrumbs(pathname);

    if (!items || items.length <= 1) return null;

    items[0].name = rootLabel;

    return (
        <nav className={cn('w-full', className)} aria-label="breadcrumb">
            <List as="ol" spacing="tight" className="flex flex-wrap items-center gap-1 text-sm">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={item.href} className="flex items-center gap-1">
                            {!isLast ? (
                                <>
                                    <Link href={item.href}>
                                        <Text as="span" size="sm" variant="default" className="hover:underline">
                                            {item.name}
                                        </Text>
                                    </Link>
                                    <span className="mx-1 text-muted-foreground">
                                        {separatorElement || <Text as="span" size="sm" variant="muted">{separator}</Text>}
                                    </span>
                                </>
                            ) : (
                                <Text as="span" size="sm" variant="muted">
                                    {item.name}
                                </Text>
                            )}
                        </li>
                    );
                })}
            </List>
        </nav>
    );
};
