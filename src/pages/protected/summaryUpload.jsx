import { useState,useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Header } from '@/components/Header'    
import { PageBackground } from '@/components/PageBackground'
import { GeistSans } from 'geist/font/sans';

export default function SummaryUpload() {
  const [authors, setAuthors] = useState(['', '', '', '', '']);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);

  // const handleTitleChange = (e) => {
  //   if (e?.target?.value) {
  //     setTitle(e.target.value);
  //   } else {
  //     console.error('Invalid event object in handleTitleChange:', e);
  //   }
  // };
  const handleAuthorChange = (index, value) => {
    const newAuthors = [...authors];
    newAuthors[index] = value;
    setAuthors(newAuthors);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!file) {
      setError('Please select a Word file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('authors', JSON.stringify(authors));
    console.log("formData", formData)

    try {
      const response = await fetch('/api/uploadSummary', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Upload successful');
        router.push('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Upload failed');
      }
    } catch (error) {
      console.error('Error uploading summary:', error);
      setError('Upload failed');
    }
  };

  return (
    <>
    <Header />
    <PageBackground>
    <main className={`${GeistSans.className} min-h-screen flex items-center justify-center`}>
      <h1 className="text-3xl font-bold mb-6 text-gray-500">Submit your summary</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
            key={0}
            type="text"
            placeholder={`Title *`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
            required
          />
      <input
            key={1}
            type="text"
            placeholder={`Author ${1} *`}
            value={authors[0] || '' } // Use an empty string if undefined
            onChange={(e) => handleAuthorChange(0, e.target.value)}
            className="mb-4 p-2 border rounded w-full"
            required
          />
        {[1, 2, 3, 4].map((index) => (
          <input
          key={index+1}
          type="text"
          placeholder={`Author ${index + 1}`}
          value={authors[index]}
          onChange={(e) => handleAuthorChange(index, e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        ))}
        <p className="text-sm text-gray-500">You regard as the corresponding author</p>
        {/* <p className="text-sm text-gray-500">Same as submitter (yes/no)</p> */}
        
        <input
          type="file"
          accept=".doc,.docx"
          onChange={handleFileChange}
          className="mb-4 p-2 border rounded w-full"
          required
        />
        {selectedFile && <p className="font-bold text-gray-500">Selected file: {selectedFile.name}</p>}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </main>
    </PageBackground>
    </>

  );
}
