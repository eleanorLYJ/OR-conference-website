import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Header } from '@/components/Header';
import { PageBackground } from '@/components/PageBackground';
import Link from 'next/link';
import { GeistSans } from 'geist/font/sans';

export default function AdminPage() {
  const [documents, setDocuments] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      fetchDocuments();
    }
  }, [status]);

  const fetchDocuments = async () => {
    try {
      if (!session || !session.user || !session.user.id) {
        console.error('User ID not available');
        return;
      }
      const userId = session.user.id;
      const response = await fetch(`/api/getDocumentsWithAuthors?userId=${userId}`);
      if (response.ok) {
        const data = await response.json();
        console.log("Documents with authors:", data);
        setDocuments(data);
      } else {
        console.error('Failed to fetch documents');
      }
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  if (status === 'loading') {
    return <div className="text-white">Loading...</div>;
  }

  if (status === 'unauthenticated') {
    return <div className="text-white">Access Denied</div>;
  }

  return (
    <>
      <Header />
      <PageBackground>
        <main className={`${GeistSans.className} min-h-screen pt-20 px-4`}>
          <div className="max-w-6xl mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6 text-white">Document Management</h1>
            <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-3/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="w-1/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
                  <th className="w-1/10 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                  <th className="w-1/10 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {documents.map((doc) => (
                  <tr key={doc.id}>
                    <td className="w-3/5 px-6 py-4 whitespace-nowrap overflow-hidden overflow-ellipsis">{doc.title}</td>
                    <td className="w-1/5 px-6 py-4 whitespace-nowrap">
                      <Link href={`/api/download/${doc.id}`}>
                        <a className="text-blue-600 hover:text-blue-900">Download</a>
                      </Link>
                    </td>
                    <td className="w-1/10 px-6 py-4 whitespace-nowrap">{doc.isPay ? 'Paid' : 'Not Paid'}</td>
                    <td className="w-1/10 px-6 py-4 whitespace-nowrap">{doc.isAccepted ? 'Approved' : 'Pending'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </main>
      </PageBackground>
    </>
  );
}