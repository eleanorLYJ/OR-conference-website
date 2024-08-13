import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { findUserByEmailAndPassword } from '@/lib/auth';
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Implement your own logic here to verify user credentials
        const user = await findUserByEmailAndPassword(credentials.email, credentials.password);
        console.log('Authorized user() in auth:', user);
        if (user) {
          return { 
			id: user.id,
			name: user.username || 'Default Name',
			email: user.email,
			role: user.role,
		 };
        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
	error: '/login',
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
//   cookies: {
//     sessionToken: {
//       name: `__Secure-next-auth.session-token`,
//       options: {
//         httpOnly: true,
//         sameSite: 'lax',
//         path: '/',
//         secure: process.env.NODE_ENV === 'production',
//       },
//     },
//   },

  callbacks: {
	async jwt({ token, user, account }) {
		console.log('JWT Callback:', { token, user, account });
		// if (user) {
		//   token.id = user.id;
		//   token.name = user.name; // Ensure the name is being set here
		//   token.email = user.email;
		// }
		    // 只在首次登錄時更新 token
			if (account && user) {
				return {
				  ...token,
				  id: user.id,
				  role: user.role,
				  name: user.name,
				};
			  }
		return token;
	  },
	  async session({ session, token }) {
		session.user.id = token.id;
		session.user.name = token.name; 
		session.user.email = token.email;
		return session;
	  }
  }
});
