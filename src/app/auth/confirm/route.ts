import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest } from 'next/server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type') as EmailOtpType | null
    const next = searchParams.get('next') ?? '/admin'

    console.log(token_hash, type)

    if (token_hash && type) {
        const supabase = await createClient()

        const { error } = await supabase.auth.verifyOtp({
            token_hash: token_hash,
            type: type,
        })
        if (!error) {
            // redirect user to specified redirect URL or root of app
            redirect(next)
        }
        else{
            console.error('[OTP ERROR]', error.message);
            const errorUrl = new URL('/login', request.url);
            errorUrl.searchParams.set('error', error.message);
            return Response.redirect(errorUrl);
        }
    }

    // redirect the user to an error page with some instructions
    // return Response.redirect(new URL('/login?error=token_missing', request.url));
    return
}