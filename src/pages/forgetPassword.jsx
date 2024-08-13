import { useState } from 'react';
import { GeistSans } from 'geist/font/sans';
import { PageBackground } from '@/components/PageBackground';
import Link from 'next/link';
import { MiduLogo } from '@/components/logos/midudev';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('/api/forget-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username }),
      });
      
      if (response.ok) {
        setMessage('If your information is correct, an email containing a temporary password has been sent to your inbox.');
      } else {
        setMessage('An error occurred while processing your request. Please try again later');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <PageBackground>
      <Link
        href='/'
        className='ml-4 transition-transform duration-300 hover:scale-125'
        title='return to homepage'
        aria-label='return to homepage'
      >
        <MiduLogo className='w-20 h-24' />
      </Link>
      <main className={`${GeistSans.className} min-h-screen flex items-center justify-center`}>
        <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'>
          <h1 className="text-2xl font-bold mb-6 text-center">Forget Password</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          {message && <p className="mt-4 text-center text-sm">{message}</p>}
          <div className="mt-4 text-center">
            <Link href="/login" className="text-blue-500 hover:text-blue-700">
              Return to Login
            </Link>
          </div>
        </div>
      </main>
    </PageBackground>
  );
}