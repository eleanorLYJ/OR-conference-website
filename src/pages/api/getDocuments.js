import { pool } from '@/lib/pg';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const client = await pool.connect();
    const result = await client.query(`
      SELECT * FROM documents 
      WHERE authors LIKE $1
      ORDER BY id DESC
    `, [`%${session.user.id}%`]);
    client.release();

    const documents = result.rows.map(doc => {
      let authors = [];
      try {
        if (typeof doc.authors === 'string') {
          // 嘗試解析 JSON 字符串
          const parsed = JSON.parse(doc.authors);
          if (Array.isArray(parsed)) {
            authors = parsed;
          } else if (typeof parsed === 'string') {
            // 處理 '{"[1,3]"}' 這種情況
            authors = JSON.parse(parsed);
          }
        }
      } catch (parseError) {
        console.error(`Error parsing authors for document ${doc.id}:`, parseError);
      }

      return {
        ...doc,
        authors: Array.isArray(authors) ? authors : []
      };
    });

    res.status(200).json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}