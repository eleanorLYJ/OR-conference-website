import { useState } from 'react';
import { useRouter } from 'next/router';
import { PageBackground } from '@/components/PageBackground';
import { GeistSans } from 'geist/font/sans';
import { MiduLogo } from '@/components/logos/midudev'

export default function Signup() {
  console.log('Enter Signup');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      console.log('Signup response:', data);
      if (response.ok) {
        // Signup successful, redirect to login page
        console.log('Signup successful', data);
        router.push('/login');
      } else {
        setError(data.message || 'Signup failed');
      }
    }
    catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred during signup');
    }
  };

  return (
    <>
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
              <h1 className="text-2xl font-bold mb-6 text-center">Signup</h1>
              {error && <p className="text-red-500">{error}</p>}
              <form onSubmit={handleSignup} className="space-y-4 m-10">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
              <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
          </form>
          </div>
        </main>
      </PageBackground>
    </>
  );
}