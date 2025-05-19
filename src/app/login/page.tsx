'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { DefaultPage } from '@/components';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');
        const { data, error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
                emailRedirectTo: `${window.location.origin}/auth/confirm`,
            },
        });
        if (!error) setSent(true);
        else setErrorMsg(error.message);
    };

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
