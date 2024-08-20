import { pool } from '@/lib/pg';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { ChineseName, EnglishName, email, jobTitle, unit, country } = req.body;

  const client = await pool.connect();
  try {
    // Check if user exists
    const result = await client.query('SELECT id FROM users WHERE email = $1', [email]);
    
    if (result.rows.length > 0) {
      // User exists, return their ID
      return res.status(200).json({ userId: result.rows[0].id });
    } else {
      // User doesn't exist, create new user
      const insertResult = await client.query(
        'INSERT INTO users (chinese_name, english_name, email, job_title, unit, country, role) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id',
        [ChineseName, EnglishName, email, jobTitle, unit, country, 'user']
      );
      return res.status(201).json({ userId: insertResult.rows[0].id });
    }
  } catch (error) {
    console.error('Error in checkOrCreateUser:', error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    client.release();
  }
}