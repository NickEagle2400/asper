'use client'

const Error = ({ error }: { error: Error }) => {
    return (
        <main className="min-h-screen flex items-center justify-center text-center">
            <div>
                <h1 className="text-3xl font-semibold text-red-600">Qualcosa è andato storto</h1>
                <p className="text-gray-600 mt-2">{error.message}</p>
            </div>
        </main>
    );
}

export default Error