import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { TUser } from '@/types/commonTypes';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text', placeholder: 'E-mail' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as { username: string; password: string };
        const res = await fetch('http://210.61.217.245/ws/Shop/Login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: username,
            password
          })
        });

        const user = await res.json();

        if (res.ok && user.result === 1) {
          return user;
        } else return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.

      session.user = token as TUser;

      return session;
    }
  },
  pages: {
    signIn: '/auth/login'
  }
};
export default NextAuth(authOptions);
