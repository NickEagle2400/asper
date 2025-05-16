'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { cn } from '@/lib/cv';

type TabsContextType = {
    activeTab: string;
    setActiveTab: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

const TabsRoot = ({
    defaultValue,
    children,
    className,
}: {
    defaultValue: string;
    children: ReactNode;
    className?: string;
}) => {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className={cn('w-full', className)}>{children}</div>
        </TabsContext.Provider>
    );
};

const TabsList = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <div className={cn('flex gap-2 border-b', className)}>{children}</div>;
};

const TabsTrigger = ({
    value,
    children,
    className,
}: {
    value: string;
    children: ReactNode;
    className?: string;
}) => {
    const context = useContext(TabsContext);
    if (!context) throw new Error('Tabs.Trigger must be used within Tabs');

    const isActive = context.activeTab === value;

    return (
        <button
            onClick={() => context.setActiveTab(value)}
            className={cn(
                'px-4 py-2 text-sm border-b-2 transition-colors',
                isActive
                    ? 'border-primary text-primary font-semibold'
                    : 'border-transparent text-muted-foreground hover:text-foreground',
                className
            )}
        >
            {children}
        </button>
    );
};

const TabsContent = ({
    value,
    children,
    className,
}: {
    value: string;
    children: ReactNode;
    className?: string;
}) => {
    const context = useContext(TabsContext);
    if (!context) throw new Error('Tabs.Content must be used within Tabs');

    if (context.activeTab !== value) return null;

    return <div className={cn('py-4', className)}>{children}</div>;
};

export {
    TabsRoot,
    TabsList,
    TabsTrigger,
    TabsContent,
}
