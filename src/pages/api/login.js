import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { pool } from '@/lib/pg';
import bcrypt from 'bcrypt';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // 查找用戶
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (result.rows.length === 0) {
          throw new Error('No user found');
        }

        const user = result.rows[0];

        const passwordMatch = await bcrypt.compare(password, user.password_hash);
        if (!passwordMatch) {
          throw new Error('Invalid password');
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
        if (user) {
            token.id = user.id;
            token.role = user.role;
            token.name = user.name; // Set the name here
          }
          console.log('JWT Callback (login.js):', token); // Log the token
          return token;
    },
    async session({ session, token }) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.name = token.name; // Ensure the name is being passed to the session
        console.log('Session Callback (login.js):', session); // Log the session
        return session;
    }
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.JWT_SECRET,
});
