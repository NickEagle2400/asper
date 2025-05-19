import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Section, Title } from '@/components'
import { PrivatePage } from '@/components/template/private-page'

export default async function AdminDashboard() {

    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    
    if (error || !data?.user) {
        redirect('/login')
    }
    return(
        <PrivatePage>
            
            <Section>
                <div>
                    <Title as='h1' size={"large"}>Benvenuto {data.user.email}</Title>
                </div>
            </Section>

        </PrivatePage>
    )
}