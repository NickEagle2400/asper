import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
        return NextResponse.json({ error: 'Email non valida' }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY!;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
    const DATACENTER = API_KEY.split('-')[1]; // us21, us10...

    const data = {
        email_address: email,
        status: 'subscribed',
    };

    const response = await fetch(
        `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
        {
            method: 'POST',
            headers: {
                Authorization: `apikey ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
    );

    if (response.status >= 400) {
        return NextResponse.json({ error: 'Errore iscrizione' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Iscritto con successo' });
}
