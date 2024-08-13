import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import formidable from 'formidable';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = formidable({ 
    uploadDir: './uploads',
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB
  });

  // Ensure 'uploads' directory exists
  if (!fs.existsSync('./uploads')) {
    fs.mkdirSync('./uploads');
  }

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(500).json({ message: 'File upload error' });
    }

    const authors = JSON.parse(fields.authors);
    const submitter = fields.submitter;
    const file = files.file;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    const title = fields.title;
    const originalFilename = file.originalFilename;
    const uniqueFilename = `${uuidv4()}_${originalFilename}`;
    const oldPath = file.filepath || file.path;  // correct path reference
    const newPath = path.join(form.uploadDir, uniqueFilename);

    fs.rename(oldPath, newPath, async (err) => {
      if (err) {
        console.error('Error saving file:', err);
        return res.status(500).json({ message: 'File save error' });
      }

      try {
        const client = await pool.connect();
        await client.query(
          'INSERT INTO documents (file_name, file_path, user_id, authors, title) VALUES ($1, $2, $3, $4, $5)',
          [uniqueFilename, newPath, submitter, authors, title]
        );
        client.release();
        return res.status(200).json({ message: 'File uploaded successfully' });
      } catch (dbError) {
        console.error('Database error:', dbError);
        return res.status(500).json({ message: 'Database error' });
      }
    });
  });
};
