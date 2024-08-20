import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Header } from '@/components/Header';    
import { PageBackground } from '@/components/PageBackground';
import { GeistSans } from 'geist/font/sans';
import AuthorInput from '@/components/AuthorInput';
import { Footer } from '@/components/Footer'

export default function SummaryUpload() {
  const [authors, setAuthors] = useState([{ ChineseName: '', EnglishName: '', email: '', jobTitle: '', unit: '', country: '' }]);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false);


  const handleAuthorChange = (index, value) => {
    const newAuthors = [...authors];
    newAuthors[index] = value;
    setAuthors(newAuthors);
  };

  useEffect(() => {
    const words = summary.trim().split(/\s+/).length;
    setWordCount(words);
    setShowWarning(words > 5000);
  }, [summary]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  // Handle adding new author input
  const addAuthorInput = () => {
    setAuthors([...authors, { ChineseName: '', EnlishName: '', email: '', jobTitle: '', unit: '', country: '' }]);
  };

  // Handle removing an author input
  const removeAuthorInput = (index) => {
    const newAuthors = authors.filter((_, i) => i !== index);
    setAuthors(newAuthors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!file) {
      setError('Please select a Word file');
      return;
    }
    if (wordCount > 5000) {
      setError('Summary exceeds 5000 words. Please shorten it.');
      return;
    }
    try {
      const authorIds = [];
      for (const author of authors) {
        if (author.ChineseName && author.EnglishName && author.email) {
          try {
            // Check if user exists and create if not
            const response = await fetch('/api/checkOrCreateUser', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(author),
            });
            if (response.ok) {
              const data = await response.json();
              authorIds.push(data.userId);
            } else {
              const errorData = await response.json();
              throw new Error(`Failed to process author: ${errorData.message}`);
            }
          } catch (error) {
            console.error('Error processing author:', error);
            setError('Failed to process authors');
            return;
          }
        }
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('authors', JSON.stringify(authorIds));
      formData.append('title', title);
      formData.append('summary', summary);
  
      const uploadResponse = await fetch('/api/uploadSummary', {
        method: 'POST',
        body: formData,
      });
  
      if (uploadResponse.ok) {
        console.log('Upload successful');
        router.push('/');
      } else {
        const errorData = await uploadResponse.json();
        setError(errorData.message || 'Upload failed');
      }
    } catch (error) {
      console.error('Error during submission:', error);
      setError('Submission failed');
    }
  };
  return (
    <>
      <Header />
      <PageBackground>
        <main className={`${GeistSans.className} min-h-screen flex flex-col items-center justify-start`} style={{ paddingTop: '100px' }}>
          <h1 className="text-3xl font-bold mb-6 text-gray-500">Submit your summary</h1>
          {error && <p className="text-red-500">{error}</p>}

          <form onSubmit={handleSubmit} encType="multipart/form-data" className="w-full max-w-lg">
            <input
              key={0}
              type="text"
              name="title"
              placeholder="Title *"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-4 p-2 border rounded w-full"
              required
            />

            {/* Dynamic Author inputs */}
            {authors.map((author, index) => (
              <div key={index} className="flex items-center mb-4">
                <div className="flex-grow mr-4">
                  <AuthorInput
                    index={index} // This will make sure it shows "Author 1", "Author 2", etc.
                    author={author}
                    onChange={handleAuthorChange}
                    required={index === 0} // Only the first author is required
                  />
                </div>
                {/* Remove Button */}
                {authors.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeAuthorInput(index)}
                    className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}

            {/* Summary input */}
            <div className="mb-4">
              <textarea
                name="summary"
                placeholder="Summary *"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="p-2 border rounded w-full h-40"
                required
              />
              {showWarning && (
                <p className="text-red-500 text-sm">
                  Warning: Summary exceeds 5000 words. Consider shortening it.
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={addAuthorInput}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
              Add Another Author
            </button>

            {/* File input */}
            <input
              type="file"
              name="file"
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
  	  <Footer />
    </>
  );
}

