// pages/api/signup.js
import { pool } from '@/lib/pg';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    const { chineseName, englishName, email, password, jobTitle, unit, country } = req.body;
    console.log("Received user data:", chineseName, englishName, email, jobTitle, unit, country)
    
    
    if (!chineseName || !englishName || !email || !jobTitle || !unit || !country) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const User = await pool.query('SELECT * FROM users WHERE chinese_name = $1 AND english_name = $2 AND email = $3 AND password_hash IS NULL', [chineseName, englishName, email]);
    if (User.rows.length > 0) {
      await pool.query(
        'UPDATE users SET password_hash = $1 WHERE id = $2',
          [hashedPassword, User.rows[0].id]
        );
        return res.status(200).json({ message: 'User updated successfully', userId: User.rows[0].id });
    }
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
        return res.status(400).json({ message: 'Username or email already exists'});
    }
    try {
        let hashedPassword = null;
        if (password) {
          hashedPassword = await bcrypt.hash(password, 10);
        }
        const result = await pool.query(
          'INSERT INTO users (chinese_name, english_name, email, password_hash, job_title, unit, country, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id',
          [chineseName, englishName, email, hashedPassword, jobTitle, unit, country, 'user']
        );
    
        console.log('User inserted successfully', result);
        res.status(201).json({ message: 'User created successfully', userId: result.rows[0].id });
      } catch (error) {
        console.error('Error in signup:', error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
      }
    }
