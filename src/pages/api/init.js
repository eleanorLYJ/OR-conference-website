// pages/api/init.js
import { pool } from '@/lib/pg';

export default async function handler(req, res) {
  try {
    const createUsersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        role VARCHAR(20) NOT NULL CHECK (role IN ('user', 'admin')),
        job_title VARCHAR(100),
        unit VARCHAR(100),
        country VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    const createDocumentsTable = `
        CREATE TABLE public.documents (
        id SERIAL PRIMARY KEY,
        file_name VARCHAR(255) NOT NULL,
        file_path TEXT NOT NULL,
        user_id INTEGER REFERENCES users(id),
        authors TEXT,
        title TEXT,
        uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    // await pool.query('DROP TABLE IF EXISTS documents');
    // await pool.query('DROP TABLE IF EXISTS users');

    // await pool.query(createUsersTable);
    // console.log('Attempting to create documents table');
    // await pool.query(createDocumentsTable);
    // console.log('Documents table created successfully');
    
    const showUsers = `
    SELECT * FROM users;
    `
    console.log(await pool.query(showUsers))

    const showDocuments = `
    SELECT * FROM documents;
    `
    console.log(await pool.query(showDocuments))


    // console.log(await pool.query("UPDATE users SET role = 'admin' WHERE username = 'admim'"))
    // console.log(await pool.query('select * from users'))
    // await pool.query(createUsersTable);
    // await pool.query(createDocumentsTable);

    res.status(200).json({ message: 'successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
