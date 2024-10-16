import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credentials),
                })

                if (response.ok) {
                    const { data } = await response.json();
                    return { id: data.user.id, email: data.user.email };
                } else {
                    throw new Error('Incorrect credentials');
                }
            },
        }),
    ],
    session: {
        jwt: true,
        maxAge: 30 * 60, // 30 minutes
    },
    jwt: {
        secret: process.env.SECRET_KEY,
    },
}

export default NextAuth(authOptions)

