'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { DefaultPage } from '@/components';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [checking, setChecking] = useState(true); // 🟡 Stato iniziale
    const router = useRouter();

    useEffect(() => {
        const checkSession = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                router.replace('/admin');
            } else {
                setChecking(false); // mostra il form solo se non loggato
            }
        };
        checkSession();
    }, [router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');
        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${window.location.origin}/auth/confirm`,
            },
        });
        if (!error) setSent(true);
        else setErrorMsg(error.message);
    };

    if (checking) return null; // 👈 Nessun contenuto durante il controllo

    return (
        <DefaultPage>
            <div className="max-w-md mx-auto py-24">
                {sent ? (
                    <p className="text-green-600">Controlla la tua email per il link di accesso.</p>
                ) : (
                    <form onSubmit={handleLogin} className="space-y-4 py-16">
                        <h1 className="text-xl font-bold">Accedi alla tua area riservata</h1>
                        <input
                            type="email"
                            placeholder="La tua email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border px-4 py-2 w-full"
                        />
                        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
                            Invia link di accesso
                        </button>
                    </form>
                )}
                {errorMsg && (
                    <p className="text-red-600 bg-red-100 p-2 rounded">{errorMsg}</p>
                )}
            </div>
        </DefaultPage>
    );
}