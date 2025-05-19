'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter, usePathname } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import { Title } from '../ui';
import Link from 'next/link';

export const AdminTopbar = () => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const check = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        check();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.refresh();
        if (pathname.startsWith('/admin')) {
            router.push('/login');
        }else{
            router.replace(pathname);
            router.refresh(); 
        }
    };

    if (!user) return null;

    return (
        <div className="fixed top-0 left-0 w-full z-[60] bg-black text-white px-4 flex items-center justify-between text-sm shadow-md">
            <div className='flex flex-row gap-4 items-center'>
                <div>
                    <Title as="h2" size={"small"} className='text-white'>NLS STUDIO</Title>
                </div>
                <div className='flex flex-row items-center'>
                    <Link href="/admin" className="underline block bg-black hover:bg-zinc-800 py-2 px-4">Dashboard</Link>
                    <Link href="/" className="underline block bg-black hover:bg-zinc-800 py-2 px-4">Torna al sito</Link>
                </div>
            </div>
            <div className='flex flex-row items-center gap-1'>
                <p><span className="font-semibold">{user.email}</span></p>
                <button onClick={handleLogout} className="text-white hover:underline cursor-pointer py-2 px-4 hover:bg-zinc-800">
                    Esci
                </button>
            </div>
            
        </div>
    );
};
