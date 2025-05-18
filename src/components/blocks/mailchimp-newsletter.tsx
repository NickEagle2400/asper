'use client';

import { useState } from 'react';

export const MailchimpForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const subscribe = async () => {
        setStatus('loading');
        const res = await fetch('/api/mailchimp', {
            method: 'POST',
            body: JSON.stringify({ email }),
        });

        setStatus(res.ok ? 'success' : 'error');
    };

    return (
        <div className="flex flex-col gap-4">
            <input
                type="email"
                placeholder="La tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border px-4 py-2 rounded"
            />
            <button
                onClick={subscribe}
                disabled={status === 'loading'}
                className="bg-black text-white px-4 py-2 rounded"
            >
                Iscriviti
            </button>

            {status === 'success' && <p className="text-green-600">Iscritto con successo!</p>}
            {status === 'error' && <p className="text-red-600">Errore, riprova.</p>}
        </div>
    );
};
