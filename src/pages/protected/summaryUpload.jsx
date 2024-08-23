import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Header } from '@/components/Header';
import { PageBackground } from '@/components/PageBackground';
import { GeistSans } from 'geist/font/sans';
import AuthorInput from '@/components/AuthorInput';
import { Footer } from '@/components/Footer'

export default function SummaryUpload() {
  const [authors, setAuthors] = useState([{ firstName: '', lastName: '', email: '', jobTitle: '', unit: '', country: '', isCorresponding: false }]);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [correspondingAuthorId, setCorrespondingAuthorId] = useState(null);
  const [correspondingAuthorError, setCorrespondingAuthorError] = useState('');

  const handleAuthorChange = (index, updatedAuthor) => {
    setAuthors(authors.map((author, i) =>
      i === index ? updatedAuthor : author
    ));
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
    setAuthors([...authors, { username: '', email: '', jobTitle: '', unit: '', country: '', isCorresponding: false, phoneNumber: '', identityNumber: '' }]);
  };

  // Handle removing an author input
  const removeAuthorInput = (index) => {
    const newAuthors = authors.filter((_, i) => i !== index);
    setAuthors(newAuthors);
    if (correspondingAuthorId === index) {
      setCorrespondingAuthorId(null);
    }
  };

  const handleCorrespondingChange = (index, isCorresponding) => {
    const updatedAuthors = authors.map((author, i) => ({
      ...author,
      isCorresponding: i === index ? isCorresponding : false
    }));

    setAuthors(updatedAuthors);
    setCorrespondingAuthorId(isCorresponding ? index : null);
  };

  useEffect(() => {
    console.log("correspondingAuthorId updated:", correspondingAuthorId);
  }, [correspondingAuthorId]);

  useEffect(() => {
    const correspondingAuthorsCount = authors.filter(author => author.isCorresponding).length;
    if (correspondingAuthorsCount === 0) {
      setCorrespondingAuthorError('Please select a corresponding author.');
    } else if (correspondingAuthorsCount > 1) {
      setCorrespondingAuthorError('Only one corresponding author can be selected.');
    } else {
      setCorrespondingAuthorError('');
    }
  }, [authors]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (correspondingAuthorError) {
      alert(correspondingAuthorError);
      return;
    }

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
      let correspondingAuthorUserId = null;

      for (const [index, author] of authors.entries()) {
        if (author.firstName && author.lastName && author.email) {
          const fullName = `${author.firstName} ${author.lastName}`;
          try {
            const response = await fetch('/api/checkOrCreateUser', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...author, username: fullName }),
            });

            if (response.ok) {
              const data = await response.json();
              authorIds.push(data.userId);

              // 如果該作者為通訊作者，設置 correspondingAuthorUserId 為該作者的索引
              if (author.isCorresponding) {
                correspondingAuthorUserId = data.userId;
              }
            } else {
              const errorData = await response.json();
              throw new Error(`Failed to process author: ${errorData.message}`);
            }
          } catch (error) {
            setError('Failed to process authors');
            return;
          }
        }
      }
      const formData = new FormData();
      formData.append('file', file);
      formData.append('authors', JSON.stringify(authorIds));
      formData.append('title', title);
      formData.append('correspondingAuthorId', correspondingAuthorUserId || '');
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
            {correspondingAuthorError && (
              <div className="text-red-500 mb-4">{correspondingAuthorError}</div>
            )}
            {/* Dynamic Author inputs */}
            {authors.map((author, index) => (
              <div key={index} className="flex items-center mb-4">
                <div className="flex-grow mr-4">
                  <AuthorInput
                    index={index} // This will make sure it shows "Author 1", "Author 2", etc.
                    author={author}
                    onChange={handleAuthorChange}
                    required={index === 0} // Only the first author is required
                    onCorrespondingChange={handleCorrespondingChange}
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
            <button
              type="button"
              onClick={addAuthorInput}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
              Add Another Author
            </button>

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
            <p className="text-red-500 text-sm">accept=".doc,.docx,.pdf"</p>

            {/* File input */}
            <input
              type="file"
              name="file"
              accept=".doc,.docx,.pdf"
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

