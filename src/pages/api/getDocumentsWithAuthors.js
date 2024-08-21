import { pool } from '@/lib/pg';

export default async function handler(req, res) {
  try {
    const { userId } = req.query;
    if (!userId || isNaN(parseInt(userId))) {
      return res.status(400).json({ error: 'Valid User ID is required' });
    }
    const parsedUserId = parseInt(userId);
    const client = await pool.connect();
    
    const documentsResult = await client.query(
      `SELECT id, title, file_name, isPay, isAccepted
       FROM documents
       WHERE user_id = $1`,
      [parsedUserId]
    );

    client.release();

    if (documentsResult.rows.length === 0) {
      return res.status(404).json({ error: 'No documents found for this user' });
    }

    res.status(200).json(documentsResult.rows);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}