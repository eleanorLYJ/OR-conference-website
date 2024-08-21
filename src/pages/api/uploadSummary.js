import fs from 'fs/promises'; // Use promises for file operations
import path from 'path';
import { IncomingForm } from 'formidable';
import { pool } from '@/lib/pg';
import { getSession } from "next-auth/react";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const session = await getSession({ req })
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // 確保上傳目錄存在
  const uploadsDir = path.join(process.cwd(), 'uploads');
  try {
    await fs.mkdir(uploadsDir, { recursive: true });
    console.log('Uploads directory ensured');
  } catch (err) {
    console.error('Error ensuring uploads directory:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
  const form = new IncomingForm({
    uploadDir: './uploads',
    keepExtensions: true,
    maxFileSize: 100 * 1024 * 1024, // 100MB
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(500).json({ message: 'File size over 100MB' }); // reason over big 
    }

  try {
    const { authors, title, summary, correspondingAuthorId } = fields;
    // Validate that a corresponding author ID is set
    if (!correspondingAuthorId || 
      correspondingAuthorId[0] === 'undefined' || 
      correspondingAuthorId[0] === 'null' ||
      correspondingAuthorId[0] === '') {
      console.log("Id is undefined")
      return res.status(400).json({ message: 'No corresponding author selected.' });
    }  
    const parsedCorrespondingAuthorId = parseInt(correspondingAuthorId[0], 10);
    const file = files.file;
    console.log("extract title: ", title, "correspondingAuthorId", correspondingAuthorId)
    
    if (isNaN(parsedCorrespondingAuthorId)) {
      return res.status(400).json({ message: 'Invalid corresponding author ID' });
    }

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const originalFilename = file.originalFilename;
    const uniqueFilename = `${Date.now()}_${originalFilename}`;
    const oldPath = file.filepath || file.path || file[0]?.filepath || file[0]?.path;

    const newPath = path.join(form.uploadDir, uniqueFilename);

    await fs.rename(oldPath, newPath);

    const client = await pool.connect();
    try {
      await client.query('BEGIN'); // Start a transaction

      console.log('Parsed user ID:', session.user.id);
      if (isNaN(session.user.id)) {
        throw new Error('Invalid user ID');
      }
      const result = await client.query(
        'INSERT INTO documents (file_name, file_path, user_id, authors, title, summary, corresponding_author_index) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id',
        [uniqueFilename, newPath, session.user.id, authors, title, summary, parsedCorrespondingAuthorId]
      );
      console.log("result", result)
      await client.query('COMMIT'); // Commit the transaction
      console.log("successfully uploaded: fileId", result.rows[0].id, "file_name", uniqueFilename, "file_path", newPath, "user_id", session.user.id, "authors", authors, "title", title)
      return res.status(200).json({ message: 'File uploaded successfully', fileId: result.rows[0].id });
    } catch (dbError) {
      await client.query('ROLLBACK'); // Rollback on error
      console.error('Database error:', dbError);
      return res.status(500).json({ message: 'Database error' });
    }
    finally {
      client.release();
    } 
  } catch (err) {
    console.error('Error saving file:', err);
    return res.status(500).json({ message: 'File save error' });
  }
  });
};
