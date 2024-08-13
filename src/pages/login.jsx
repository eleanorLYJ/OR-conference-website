import { useState, useContext  } from 'react';
import { useRouter } from 'next/router';
import { GeistSans } from 'geist/font/sans'
import { PageBackground } from '@/components/PageBackground'
import React from 'react';
import Link from 'next/link'
import { MiduLogo } from '@/components/logos/midudev'
import { signIn } from 'next-auth/react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    if (!result.error) {
      router.push('/');
    } else {
      console.error(result.error);
    }
  };

  return (
        
    <ErrorBoundary>
      <PageBackground>
      <a
					href='/'
					className='ml-4 transition-transform duration-300 hover:scale-125'
          title='return to homepage'
          aria-label='return to homepage'
				>
					<MiduLogo className='w-20 h-24' />
				</a>
      <main className={`${GeistSans.className} min-h-screen flex items-center justify-center`}>
          <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'>
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4 m-10">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
            <div className="flex justify-center">
              <Link href="/signup" className=" hover:bg-blue-700 hover:text-white py-2 px-4 rounded">
                SignUp
              </Link>
              <Link href="/forgetPassword" className=" hover:bg-blue-700 hover:text-white py-2 px-4 rounded">
                forget password
              </Link>
            </div>
          </div>
      </main>
      </PageBackground>
    </ErrorBoundary>
  );
}
